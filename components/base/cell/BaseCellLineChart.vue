<template>
  <div v-if="series.length" class="h-full">
    <BaseChart :options="options" :series="series" />
  </div>
</template>
<script setup>
import { formatNumber } from '~/utils/helpers';
const props = defineProps({
  params: Object
});
const options = {
  chart: {
    id: `cell-chart-${Math.random()}`,
    margin: 0,
    padding: 4
  },
  xAxis: {
    visible: false,
    type: 'datetime'
  },
  yAxis: {
    visible: false
  },
  tooltip: {
    pointFormatter: function () {
      return formatNumber(this.y);
    }
  }
};
const series = computed(() => {
  return props?.params?.value || [];
});
</script>
