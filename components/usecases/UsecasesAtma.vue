<template>
  <BaseSection :label="'Atma'">
    <template #controls>
      <BaseRadio v-model="selectedTimeframe" :options="timeframeOptions" />
    </template>
    <div class="space-y-4 md:space-y-0 md:flex md:space-x-4 justify-between overflow-x-auto w-full">
      <BaseCard class="md:w-1/2 h-80">
        <template #header>Transaction Volume</template>
        <div class="h-full px-2 w-full">
          <BaseChart :options="volumeChartOptions" :series="volumeChartSeries" />
        </div>
      </BaseCard>
      <BaseCard class="md:w-1/2 h-80">
        <template #header>Accounts engaging with Atma</template>
        <div class="h-full px-2 w-full">
          <BaseChart :options="accountsChartOptions" :series="accountsChartSeries" />
        </div>
      </BaseCard>
    </div>
  </BaseSection>
</template>
<script setup>
import colors from 'tailwindcss/colors';
import { randomSeries } from '~/utils/helpers';
const selectedTimeframe = ref('30D');
const timeframeOptions = ['24H', '7D', '30D', '3M', '6M', '1Y', 'YTD', 'ALL'];

//TRANSACTION VOLUMES
const volumeChartOptions = computed(() => {
  return {
    chart: {
      type: 'column'
    },
    xAxis: {
      // type: 'datetime',
    }
  };
});
const volumeChartSeries = computed(() => {
  return [
    {
      name: 'New',
      color: colors.purple[400],
      data: randomSeries(1000, 100000)
    }
  ];
});

//ENGAGED ACCOUNTS
const accountsChartOptions = computed(() => {
  return {
    xAxis: {
      // type: 'datetime',
    }
  };
});
const accountsChartSeries = computed(() => {
  return [
    {
      name: 'New',
      color: colors.purple[400],
      data: randomSeries(1000, 100000)
    }
  ];
});
</script>
