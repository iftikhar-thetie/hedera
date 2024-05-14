<template>
  <span :class="['text-xs', colorClass]">
    <span v-if="percent > 0">+</span>{{ roundedPercent(percent, decimals) }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { roundedPercent } from '~/utils/helpers';

const props = defineProps({
  percent: {
    type: Number,
    required: true
  },
  decimals: {
    type: Number,
    default: 2
  }
});

const colorClass = computed(() => {
  if (props.percent > 0) return 'text-green-400';
  else if (props.percent < 0) return 'text-red-400';
  else return 'text-gray-400';
});
</script>
