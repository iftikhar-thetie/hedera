<template>
  <a
    :href="params?.href"
    class="flex h-full items-center gap-1 text-slate-100"
    :class="params?.justifyStart ? 'justify-start' : 'justify-end'"
  >
    {{ params?.value }}
    <LinkIcon class="h-3.5 w-3.5 text-slate-400" />
  </a>
</template>

<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});
</script>
