<template>
  <BaseSection :label="'Stablecoin Studio'">
    <template #controls>
      <BaseRadio v-model="selectedTimeframe" :options="timeframeOptions" />
    </template>
    <div class="space-y-4 md:space-y-0 md:flex md:space-x-4 justify-between overflow-x-auto w-full">
      <BaseCard class="md:w-1/3 h-80">
        <template #header>Stablecoins issued by marketcap</template>
        <div class="h-full px-2 w-full">
          <div id="container" class="w-full h-full"></div>
          <!-- <BaseChart :options="issuedChartOptions" :series="issuedChartSeries"/> -->
        </div>
      </BaseCard>
      <BaseCard class="md:w-1/3 h-80">
        <template #header>Transaction Volume</template>
        <div class="h-full px-2 w-full">
          <BaseChart :options="volumeChartOptions" :series="volumeChartSeries" />
        </div>
      </BaseCard>
      <BaseCard class="md:w-1/3 h-80">
        <template #header>Trading and transfer volume</template>
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
import Highcharts from 'highcharts';

const selectedTimeframe = ref('30D');
const timeframeOptions = ['24H', '7D', '30D', '3M', '6M', '1Y', 'YTD', 'ALL'];

//ISSUED BY MARKET CAP
//BaseChart breaks on area type for some reason so workaround for current time
onMounted(() => {
  Highcharts.chart('container', {
    chart: {
      type: 'area'
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [
      {
        name: 'New 5',
        data: randomSeries(500, 600)
      },
      {
        name: 'New',
        type: 'area',
        data: randomSeries(0, 100)
      },
      {
        name: 'New 1',
        data: randomSeries(100, 200)
      },
      {
        name: 'New 2',
        data: randomSeries(200, 300)
      },
      {
        name: 'New 4',
        data: randomSeries(300, 400)
      },
      {
        name: 'New 3',
        data: randomSeries(400, 500)
      }
    ]
  });
});

//TRNSACTION VOLUME
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
      color: colors.blue[400],
      data: randomSeries(0, 5000)
    }
  ];
});

//TRADING AND TRANSFER VOLUME
const accountsChartOptions = computed(() => {
  return {
    xAxis: {
      // type: 'datetime',
    },
    yAxis: [{}, { opposite: true }]
  };
});
const accountsChartSeries = computed(() => {
  return [
    {
      name: 'New',
      yAxis: 0,
      color: colors.blue[400],
      data: randomSeries(100, 1000)
    },
    {
      name: 'New',
      yAxis: 1,
      color: colors.orange[400],
      data: randomSeries(100, 1000)
    }
  ];
});
</script>
