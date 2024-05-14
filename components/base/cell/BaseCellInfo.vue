<template>
  <div class="flex h-full items-center gap-1" :class="params?.justifyStart ? 'justify-start' : 'justify-end'">
    {{ params?.value }}
    <InformationCircleIcon class="h-3.5 w-3.5 text-slate-400" />
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});
</script>
