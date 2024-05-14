<template>
  <BaseCard>
    <template #header>Ecosystem MarketCap and TVL</template>
    <div class="h-full px-2 w-full">
      <BaseChart :options="developerOptions" :series="developerSeries" />
    </div>
  </BaseCard>
</template>
<script setup>
import colors from 'tailwindcss/colors';
import { randomSeries } from '~/utils/helpers';

//DEVELOPERS COUNT
const developerOptions = computed(() => {
  return {
    chart: {
      id: 'ecosystem-activity-chart'
    },
    xAxis: {
      // type: 'datetime',
    },
    yAxis: [{}, { opposite: true }]
  };
});
const developerSeries = computed(() => {
  return [
    {
      name: 'MCap',
      yAxis: 0,
      color: colors.fuchsia[400],
      data: randomSeries(0, 100)
    },
    {
      name: 'TVL',
      yAxis: 1,
      color: colors.teal[400],
      data: randomSeries(0, 100)
    }
  ];
});
</script>
