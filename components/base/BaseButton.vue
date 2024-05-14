<template>
  <button
    class="flex select-none items-center justify-center rounded-full font-medium duration-100"
    :class="[sizeClasses, colorClasses, hoverClasses, focusClasses, disabled ? 'cursor-not-allowed opacity-50' : '']"
    @click="handleOnClick"
  >
    <BaseTooltip v-if="!!$slots.tooltip" position="top">
      <template #target><slot /></template>
      <template #default><slot name="tooltip" /></template>
    </BaseTooltip>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator(value: string) {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value);
    }
  },
  type: {
    type: String,
    default: 'primary',
    validator(value: string) {
      return ['primary', 'secondary', 'tertiary', 'ghost', 'success', 'danger'].includes(value);
    }
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['press']);

const buttonIsDisabled = computed(() => props.disabled);

const sizeClasses = computed(() => {
  return {
    xxs: 'px-1 py-0.5 text-xs',
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 h-8 text-xs',
    md: 'px-5 py-2 text-sm',
    lg: 'px-6 py-2 text-base',
    xl: 'px-6 py-2 text-lg'
  }[props.size];
});

const colorClasses = computed(() => {
  return {
    primary: 'bg-blue-900 text-slate-100',
    secondary: 'bg-slate-800 text-slate-100 border-solid border border-slate-700',
    tertiary: 'bg-transparent text-slate-100 border-solid border border-slate-800',
    ghost: 'bg-transparent text-slate-300',
    danger: 'bg-red-900 text-slate-100',
    success: 'bg-green-900 text-slate-100'
  }[props.type];
});

const hoverClasses = computed(() =>
  !props.disabled
    ? {
        primary: 'hover:bg-blue-800',
        secondary: 'hover:bg-slate-700',
        tertiary: 'hover:bg-slate-600/25 hover:text-slate-100',
        ghost: 'hover:bg-slate-600/25 hover:text-slate-300',
        danger: 'hover:bg-red-800 hover:text-slate-100',
        success: 'hover:bg-green-800 hover:text-slate-100'
      }[props.type]
    : ''
);

const focusClasses = computed(() =>
  !props.disabled
    ? {
        primary: 'focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:bg-blue-800',
        secondary:
          'focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 focus-visible:bg-slate-800',
        tertiary:
          'focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-800 focus-visible:bg-transparent focus-visible:border-transparent',
        ghost:
          'focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-800 focus-visible:bg-transparent focus-visible:border-transparent',
        danger: 'focus-visible:outline-none focus-visible:ring focus-visible:ring-red-600 focus-visible:bg-red-800',
        success: 'focus-visible:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:bg-green-800'
      }[props.type]
    : ''
);

const loaderSizeClasses = computed(() => {
  return {
    xs: 'w-3 h-3',
    sm: 'w-[1rem] h-[1rem]',
    md: 'w-[1.25rem] h-[1.25rem]',
    lg: 'w-[1.5rem] h-[1.5rem]',
    xl: 'w-[2rem] h-[2rem]'
  }[props.size];
});

const loaderColors = computed(() => {
  return {
    primary: 'from-blue-400 via-blue-600 to-blue-800',
    secondary: 'from-slate-400 via-slate-600 to-slate-800',
    danger: 'from-slate-400 via-slate-600 to-slate-800',
    success: 'from-slate-400 via-slate-600 to-slate-800'
  }[props.type];
});

const handleOnClick = (e: MouseEvent) => {
  e.preventDefault();
  if (!props.disabled) {
    emit('press');
  }
  return e;
};
</script>
