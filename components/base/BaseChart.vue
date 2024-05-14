<template>
  <client-only>
    <Chart :options="chartOptions" class="h-full w-full"></Chart>
  </client-only>
</template>

<script setup>
import { computed } from 'vue';
import { Chart } from 'highcharts-vue';
const props = defineProps({
  options: { type: Object, default: null },
  series: { type: Array, required: true }
});

const chartOptions = computed(() => {
  const monthly = props.options.xAxis?.monthly;
  const frequency = props.options?.tooltip?.selectedTimeframe?.frequency;

  return {
    ...props.options,
    series: props.series,
    chart: {
      ...props.options.chart
    },
    plotOptions: {
      ...props.options.plotOptions,
      area: {
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 }
        }
      }
    },
    legend: {
      ...props.options.legend
    },
    tooltip: {
      xDateFormat: monthly ? '%b %Y' : frequency == '1day' ? '%b %d, %Y' : '%l:%M %P, %b %d, %Y',
      ...props.options.tooltip
    }
  };
});
</script>
