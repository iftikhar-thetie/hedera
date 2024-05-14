<template>
  <div
    :class="[
      'flex max-w-xs',
      'rounded border border-solid border-slate-700',
      'bg-slate-800',
      'px-2 py-1',
      'text-xs text-slate-300 antialiased'
    ]"
  >
    {{ params?.value }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});
</script>
