<template>
  <SwitchGroup>
    <div class="flex items-center">
      <SwitchLabel
        v-if="$slots.left"
        :class="[
          'cursor-pointer',
          'select-none text-xs font-medium',
          'mr-2',
          enabled ? 'text-neutral-400' : 'text-neutral-100'
        ]"
      >
        <slot name="left" />
      </SwitchLabel>
      <Switch
        v-model="enabled"
        :class="enabled ? 'border-blue-400 bg-blue-600' : 'border-neutral-900 bg-neutral-700'"
        class="relative inline-flex h-4 w-8 items-center rounded-full border transition-colors focus:outline-none focus-visible:ring focus-visible:ring-neutral-100"
      >
        <span
          :class="[
            'inline-block h-4 w-4 rounded-full bg-neutral-100',
            'transform transition-transform',
            enabled ? 'translate-x-4' : ''
          ]"
        />
      </Switch>
      <SwitchLabel
        v-if="$slots.right"
        :class="[
          'cursor-pointer',
          'select-none text-xs font-medium duration-100',
          'ml-2',
          enabled ? 'text-neutral-100' : 'text-neutral-400'
        ]"
      >
        <slot name="right" />
      </SwitchLabel>
    </div>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const enabled = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emit('update:modelValue', value);
  }
});
</script>
