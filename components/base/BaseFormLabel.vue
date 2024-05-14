<template>
  <label class="flex flex-col gap-0.5">
    <div v-if="!!$slots.label" class="text-slate-400 text-xs" :class="hiddenLabel ? 'hidden' : ''">
      <slot name="label" />
    </div>
    <slot />
    <div v-if="!!$slots.error" class="text-red-500 text-xs">
      <slot name="error" />
    </div>
  </label>
</template>

<script setup lang="ts">
defineProps({
  hiddenLabel: {
    type: Boolean,
    default: false
  }
});
</script>
