<template>
  <BaseSection :label="'Abrdn'">
    <template #icon>
      <img :src="AbrdnIcon" class="w-6 h-6 mr-2" />
    </template>
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
        <template #header>Accounts engaging with Abrdn</template>
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
import AbrdnIcon from '~/assets/icons/abrdn.svg';

const selectedTimeframe = ref('30D');
const timeframeOptions = ['24H', '7D', '30D', '3M', '6M', '1Y', 'YTD', 'ALL'];

//TRANSACTION VOLUMES
const volumeChartOptions = computed(() => {
  return {
    chart: {
      id: 'abrdn-trxs-volume-chart',
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
      color: colors.fuchsia[400],
      data: randomSeries(100, 10000)
    }
  ];
});

//ENGAGED ACCOUNTS
const accountsChartOptions = computed(() => {
  return {
    chart: {
      id: 'abrdn-engaged-accounts-chart'
    },
    xAxis: {
      // type: 'datetime',
    }
  };
});
const accountsChartSeries = computed(() => {
  return [
    {
      name: 'New',
      color: colors.fuchsia[400],
      data: randomSeries(0, 100)
    }
  ];
});
</script>
