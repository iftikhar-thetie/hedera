<template>
  <BaseFormLabel v-bind="$attrs">
    <template #label>
      <slot />
    </template>
    <Listbox v-slot="{ open }" v-model="selectValues" :multiple="multiple" class="font-medium" @click.prevent>
      <Float
        composable
        as="div"
        class="relative"
        position="bottom"
        floating-as="template"
        :portal="portal"
        @show="search = ''"
      >
        <FloatReference>
          <ListboxButton
            :class="[
              'flex items-center',
              buttonHeightClass,
              'select-none whitespace-nowrap text-xs',
              'border border-solid border-neutral-800 bg-neutral-900',
              variant ? 'border-l-0 border-r-0' : 'focus:border-blue-400',
              'focus:outline-none',
              stickyPlaceholder ? 'pr-2' : 'px-2',
              selectLabels.length >= 1 ? (open ? 'text-neutral-100' : 'text-neutral-300') : 'text-neutral-400',
              buttonWidthClass,
              roundedClass
            ]"
          >
            <div class="flex w-full justify-between">
              <span class="truncate">
                <template v-if="selectLabels.length >= 1">
                  <template v-if="multiple">({{ selectLabels.length }})</template>
                  {{ selectLabels.slice(0, displayCount).join(', ') }}
                  <template v-if="selectLabels.length - displayCount > 0">
                    + {{ selectLabels.length - displayCount }}
                  </template>
                </template>
                <template v-else>
                  {{ placeholder }}
                </template>
              </span>
              <component
                :is="open ? ChevronUpIcon : ChevronDownIcon"
                class="ml-1 h-3.5 w-3.5 align-middle text-neutral-400"
              />
            </div>
          </ListboxButton>
        </FloatReference>

        <FloatContent>
          <ListboxOptions
            :class="[
              'rounded border border-solid border-neutral-700 focus:outline-none',
              'bg-neutral-800/80 backdrop-blur-md',
              'text-xs antialiased mt-px top-1',
              widthClass,
              dropdownWidthClass
            ]"
          >
            <div v-if="searchable" class="p-1 w-full">
              <BaseSearchbox v-model="search" @keydown.enter="searchEnterKeydown" @keydown.space.stop />
            </div>
            <slot name="tabs" />
            <template v-if="showSelected && selectedOptions.length">
              <BaseDivider />
              <div v-if="clearOption" class="p-2 text-neutral-400 cursor-pointer" @click="clearAll">Clear All</div>

              <div
                :ref="selectedContainerProps.ref"
                :style="[
                  `height: ${Math.min(selectedOptions.length * 32, maxSelectedContainerHeight)}px`,
                  selectedContainerProps.style
                ]"
                @scroll="selectedOnScroll"
              >
                <div v-bind="selectedWrapperProps">
                  <!-- you can get current item of list here -->
                  <ListboxOption
                    v-for="{ data } in selectedList"
                    :key="data.id"
                    v-slot="{ active, selected, disabled }"
                    :value="data.id"
                    :disabled="data.disabled"
                    as="template"
                  >
                    <li
                      :class="[
                        active ? 'bg-neutral-700/50 text-neutral-100' : '',
                        disabled ? 'cursor-default text-neutral-500' : 'cursor-pointer text-neutral-300',
                        'group duration-100 relative select-none py-2 pl-7 bg-neutral-600/50'
                      ]"
                    >
                      <span
                        v-if="selected"
                        :class="[multiple ? 'pl-1.5' : 'pl-2', 'absolute inset-y-0 left-0 flex items-center']"
                        aria-hidden="true"
                      >
                        <CheckIcon v-if="multiple" class="h-4 w-4" />
                        <span
                          v-else
                          class="h-3 w-3 rounded-full border-solid border-4 border-blue-600 bg-neutral-100"
                        />
                      </span>
                      <div class="flex space-x-2">
                        <span> {{ data.label }} </span>
                        <span v-if="data.sub_label" class="text-gray-400">
                          {{ data.sub_label }}
                        </span>
                      </div>
                    </li>
                  </ListboxOption>
                </div>
              </div>
              <BaseDivider />
            </template>
            <div
              :ref="filteredContainerProps.ref"
              :style="[
                `height: ${Math.min(groupedOptions.length * 32, maxfilteredContainerHeight)}px`,
                filteredContainerProps.style
              ]"
              @scroll="filteredOnScroll"
            >
              <div v-bind="filteredWrapperProps">
                <!-- you can get current item of list here -->
                <ListboxOption
                  v-for="{ data } in filteredList"
                  :key="data.id"
                  v-slot="{ active, selected, disabled }"
                  :value="data.id"
                  :disabled="data.disabled"
                  as="template"
                >
                  <BaseTooltip :position="tooltipPosition" v-if="data.tooltip">
                    <template #target>
                      <BaseSelectOption
                        :data="data"
                        :multiple="multiple"
                        :selected="selected"
                        :active="active"
                        :disabled="disabled"
                        @select-group="selectGroup"
                      />
                    </template>
                    <template #default>
                      <div class="max-w-sm whitespace-normal">
                        {{ data.tooltip }}
                      </div>
                    </template>
                  </BaseTooltip>
                  <BaseSelectOption
                    v-else
                    :data="data"
                    :multiple="multiple"
                    :selected="selected"
                    :active="active"
                    :disabled="disabled"
                    @select-group="selectGroup"
                  />
                </ListboxOption>
              </div>
            </div>
            <slot name="footer"></slot>
          </ListboxOptions>
        </FloatContent>
      </Float>
    </Listbox>
    <template #error>
      <slot name="error" />
    </template>
  </BaseFormLabel>
</template>

<script setup lang="ts">
import { ref, computed, watch, type PropType } from 'vue';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, ListboxLabel } from '@headlessui/vue';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@heroicons/vue/24/solid';
import { Float, FloatReference, FloatContent } from '@headlessui-float/vue';
import { useVirtualList } from '@vueuse/core';
import groupBy from 'lodash/groupBy';

export interface SelectType {
  label: string;
  id: string | number;
  disabled?: boolean;
  [key: string]: string | undefined | boolean | number;
}

const props = defineProps({
  modelValue: {
    type: [Array, String, Number],
    required: true
  },
  options: {
    type: Object as PropType<SelectType[]>,
    required: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  widthClass: {
    type: String,
    default: ''
  },
  buttonWidthClass: {
    type: String,
    default: ''
  },
  dropdownWidthClass: {
    type: String,
    default: 'w-full'
  },
  displayCount: {
    type: Number,
    default: 3
  },
  searchable: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: null
  },
  showSelected: {
    type: Boolean,
    default: false
  },
  portal: {
    type: Boolean,
    default: false
  },
  searchOptions: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  clearOption: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validates: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  tooltipPosition: {
    type: String,
    default: 'right'
  },
  appendable: {
    type: Boolean,
    default: false
  },
  dropdownHeight: {
    type: String,
    default: 'md',
    validates: (value: string) => ['md', 'lg', 'xl', '2xl'].includes(value)
  },
  stickyPlaceholder: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'action:search', 'append:option']);

const selectValues = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
});

const buttonHeightClass = computed(() => {
  if (props.size == 'lg') {
    return 'h-10';
  }
  return 'h-6';
});

const maxfilteredContainerHeight = computed(() => {
  if (props.dropdownHeight == 'md') {
    return 256;
  } else if (props.dropdownHeight == 'lg') {
    return 384;
  } else if (props.dropdownHeight == 'xl') {
    return 512;
  } else if (props.dropdownHeight == '2xl') {
    return 640;
  }
  return 256;
});

const maxSelectedContainerHeight = computed(() => {
  if (props.dropdownHeight == 'md') {
    return 112;
  } else if (props.dropdownHeight == 'lg') {
    return 169;
  } else if (props.dropdownHeight == 'xl') {
    return 225;
  } else if (props.dropdownHeight == '2xl') {
    return 282;
  }
  return 112;
});

const roundedClass = computed(() => {
  if (props.variant == 'rightAddOnGroup') {
    return '';
  } else if (props.variant == 'leftAddOnGroup') {
    return '';
  }
  return 'rounded';
});

const backgroundColor = computed(() => {
  if (props.variant) {
    return 'bg-neutral-800/50';
  }
  // If it's embedded in a left/right slot for input fields
  return 'bg-neutral-800/50';
});

const selectLabels = computed(() => {
  if (props.options.length == 0) return [];

  const selectedIds = props.multiple ? (props.modelValue as string[]) : props.modelValue ? [props.modelValue] : [];

  return selectedIds.map(id => (props.options.find(option => option.id == id) as SelectType)?.label);
});

const filteredOptions = computed(() => {
  let fields = ['label', ...props.searchOptions];
  return props.options.filter(o =>
    fields.some(field => {
      return (o[field] as string)?.toLowerCase().includes(search.value.toLowerCase());
    })
  );
});

const selectedOptions = computed(() => props.options.filter(o => selectLabels.value.includes(o.label)));

const search = ref('');
function searchEnterKeydown() {
  if (props.appendable) {
    emit('append:option', search.value);
  }
}
watch(search, () => {
  if (props.appendable) {
    emit('action:search', search.value);
  }
});

const clearAll = (e: MouseEvent) => {
  e.preventDefault();
  search.value = '';
  selectValues.value = props.multiple ? [] : '';
  return e;
};

const selectGroup = (e: MouseEvent, id: string | number) => {
  if (props.multiple) {
    const groupOptionIds = filteredOptions.value.filter(x => x.group == id && !x.disabled).map(x => x.id);
    const selectedIds = selectValues.value as any[];
    const hasAllElems = groupOptionIds.every((elem: any) => selectedIds.includes(elem));
    if (hasAllElems) {
      selectValues.value = selectedIds.filter(el => !groupOptionIds.includes(el));
    } else {
      selectValues.value = [...new Set(selectedIds.concat(groupOptionIds))];
    }
  }
  return e;
};

const groupedOptions = computed(() => {
  const data = groupBy(filteredOptions.value, 'group');
  let result = data.undefined || [];
  Object.keys(data).forEach(key => {
    if (key == 'undefined') return;
    else {
      result.push({
        id: key,
        label: key.toUpperCase(),
        isGroupHeading: true
      });
      result = result.concat(data[key]);
    }
  });
  return result;
});

const {
  list: filteredList,
  containerProps: filteredContainerProps,
  wrapperProps: filteredWrapperProps
} = useVirtualList(groupedOptions, {
  itemHeight: 32,
  overscan: 100
});

const filteredOnScroll = computed(() => filteredContainerProps.onScroll as unknown as UIEvent);

const {
  list: selectedList,
  containerProps: selectedContainerProps,
  wrapperProps: selectedWrapperProps
} = useVirtualList(selectedOptions, {
  itemHeight: 32,
  overscan: 100
});

const selectedOnScroll = computed(() => selectedContainerProps.onScroll as unknown as UIEvent);
</script>
