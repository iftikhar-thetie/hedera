<template>
  <Popover
    v-if="!!$slots.default"
    class="text-neutral-100"
    @mouseenter="open = true"
    @mouseleave="open = false"
    @focusin="open = true"
    @focusout="open = false"
  >
    <Float
      :placement="(position as unknown as undefined)"
      :offset="5"
      arrow
      shift
      tailwindcss-origin-class
      :show="open"
    >
      <slot name="target" />

      <PopoverPanel
        static
        class="antialiased rounded-md shadow-lg focus:outline-none"
        :class="[bgColorClass, textSizeClass]"
      >
        <FloatArrow class="absolute h-3 w-3 rotate-45" :class="bgColorClass" />
        <div class="relative" :class="paddingClass">
          <slot />
        </div>
      </PopoverPanel>
    </Float>
  </Popover>
  <template v-else>
    <slot name="target" />
  </template>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { Float, FloatArrow } from '@headlessui-float/vue';

const open = ref(false);

const props = defineProps({
  position: {
    type: [String],
    default: 'bottom',
    validator(value: string) {
      return [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'bottom-start',
        'left-start',
        'right-start',
        'top-end',
        'bottom-end',
        'left-end',
        'right-end'
      ].includes(value);
    }
  },
  bgColor: {
    type: [String],
    default: '800',
    validator(value: string) {
      return ['700', '800', '900'].includes(value);
    }
  },
  size: {
    type: [String],
    default: 'md',
    validator(value: string) {
      return ['sm', 'md', 'lg'].includes(value);
    }
  }
});

const positionClass = computed(() => {
  return {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-1',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-1',
    left: 'right-full top-1/2 -translate-y-1/2 mr-1',
    right: 'left-full top-1/2 -translate-y-1/2 ml-1'
  }[props.position];
});

const bgColorClass = computed(() => {
  return {
    '700': 'bg-neutral-700',
    '800': 'bg-neutral-800',
    '900': 'bg-neutral-900'
  }[props.bgColor];
});

const paddingClass = computed(() => {
  return {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3'
  }[props.size];
});

const textSizeClass = computed(() => {
  return {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm'
  }[props.size];
});
</script>
