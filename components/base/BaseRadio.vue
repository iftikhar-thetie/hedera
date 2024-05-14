<template>
  <RadioGroup
    v-model="radioValue"
    :class="['flex flex-row gap-2 flex-wrap items-center', 'cursor-pointer', 'text-xs text-slate-300']"
  >
    <RadioGroupLabel v-if="$slots.default"><slot /></RadioGroupLabel>
    <div class="rounded flex-row flex relative">
      <div
        :class="['z-0 absolute h-full', 'transition-all duration-300 ease-out', 'rounded bg-neutral-800']"
        :style="positioningStyles"
      />
      <RadioGroupOption
        v-for="(option, index) of options"
        :key="index"
        ref="optionRefs"
        :value="option"
        :class="[
          'z-10',
          'flex flex-row',
          'select-none font-medium',
          'rounded',
          radioValue == option ? 'text-blue-400' : 'text-neutral-200 hover:bg-neutral-800',
          'py-1 px-3'
        ]"
      >
        {{ option }}
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { ref, type PropType, computed, onMounted } from 'vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
const props = defineProps({
  modelValue: {
    type: [String],
    required: true
  },
  options: {
    type: Array as PropType<string[]>,
    required: true
  }
});
const optionRefs = ref([]);
const optionWidths = ref([]);
const selectedIndex = computed(() => props.options.findIndex(o => o == radioValue.value));
const positioningStyles = computed(() => {
  const leftPixels = optionWidths.value.slice(0, selectedIndex.value).reduce((a, b) => a + b, 0);
  const rightPixels = optionWidths.value.slice(selectedIndex.value + 1).reduce((a, b) => a + b, 0);
  return `left: ${leftPixels}px; 
          right: ${rightPixels}px;`;
});
onMounted(() => {
  optionRefs.value.forEach(option => {
    // @ts-expect-error: doesn't recognize option.el as HTML Element
    optionWidths.value.push(option.el.clientWidth);
  });
});
const emit = defineEmits(['update:modelValue']);
const radioValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
});
</script>
