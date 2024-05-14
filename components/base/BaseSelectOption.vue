<template>
  <li v-if="data?.isGroupHeading" class="py-2 pl-4">
    <label
      class="font-medium text-xs uppercase text-neutral-400 tracking-widest"
      :class="multiple ? 'cursor-pointer tiedy:hover' : ''"
      @click.prevent="($event: MouseEvent) => emitSelectGroup($event, data?.id)"
    >
      {{ data?.label }}
    </label>
  </li>
  <li
    v-else
    :class="[
      active ? 'bg-neutral-700/50 text-neutral-100' : '',
      data?.disabled ? 'cursor-default text-neutral-500' : 'cursor-pointer text-neutral-300',
      'group duration-100 relative select-none py-2 pl-7'
    ]"
  >
    <span
      v-if="selected"
      :class="[multiple ? 'pl-1.5' : 'pl-2', 'absolute inset-y-0 left-0 flex items-center']"
      aria-hidden="true"
    >
      <CheckIcon v-if="multiple" class="h-4 w-4" />
      <span v-else class="h-3 w-3 rounded-full border-solid border-4 border-blue-600 bg-neutral-100" />
    </span>
    <div class="flex space-x-2">
      <span> {{ data?.label }} </span>
      <span v-if="data?.sub_label" class="text-gray-400">
        {{ data?.sub_label }}
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid';
const props = defineProps({
  data: { type: Object },
  multiple: { type: Boolean },
  selected: { type: Boolean },
  active: { type: Boolean },
  disabled: { type: Boolean }
});

const emit = defineEmits(['selectGroup']);

const emitSelectGroup = (e: MouseEvent, id: string | number) => {
  emit('selectGroup', e, id);
  return e;
};
</script>
