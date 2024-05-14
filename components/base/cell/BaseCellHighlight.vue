<template>
  <div
    v-if="params?.value?.metric"
    class="flex h-full flex-col justify-center gap-1"
    :class="params?.justifyStart ? 'items-start' : 'items-end'"
  >
    <div class="flex gap-2 leading-4">
      <div>{{ params?.prefix }}{{ formattedMetric }} {{ params?.suffix }}</div>
      <BasePercent v-if="params?.value?.percent" :percent="params?.value?.percent" />
    </div>
    <div class="flex gap-1 text-slate-400 leading-4">
      {{ params?.comparisonPrefix }}
      <span class="text-slate-100 font-semibold">
        {{ params?.value?.comparison }}
      </span>
      {{ params?.comparisonSuffix }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});

const formattedMetric = computed(() => props.params?.value?.metric.toLocaleString());
</script>
