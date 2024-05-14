<template>
  <div class="flex rounded bg-neutral-900">
    <BaseCard class="w-1/2">
      <template #header>Staked Weight</template>
      <BaseChart :options="chartOptions" :series="chartSeries" />
    </BaseCard>
    <ChartLegendOptions class="w-1/2" :options="legendOptions" />
  </div>
</template>
<script setup>
import Highcharts from 'highcharts';
//STAKE WEIGTH
const chartOptions = {
  legend: {
    enabled: false
  },
  tooltip: {
    valueDecimals: 2,
    valueSuffix: ' TWh'
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      colorByPoint: true,
      type: 'pie',
      size: '100%',
      innerSize: '80%',
      dataLabels: {
        enabled: false,
        crop: false,
        distance: '-10%',
        style: {
          fontWeight: 'bold',
          fontSize: '16px'
        },
        connectorWidth: 0
      }
    }
  }
};

const chartSeries = computed(() => {
  const series = stakedWeight.value.map((item, index) => {
    return [
      item.name, parseFloat(item?.stake_weight)
    ]
  })

  return [{
    type: 'pie',
    data: series
  }];
});

const legendOptions = computed(() => {
  const colors = Highcharts.getOptions().colors.map(c => c);
  const data = chartSeries.value[0].data;
  return data.map((x, i) => {
    return {
      name: `${x[1]} - ${x[0]}`,
      color: colors[i % 4]
    };
  });
});

onMounted(() => {
  fetchData();
});

const stakedWeight = ref([])
// Define a function to fetch your API data
const fetchData = async () => {
  const response = await fetch(
    `/api/fetch/Overview:StakedWeight`
  );

  if (response.ok) {
    let jsonData;
    try {
      jsonData = await response?.json();
    } catch (error) {
      console.log("An error occurred while parsing JSON:", error);
    }
    if (jsonData) {
      stakedWeight.value = jsonData?.validators_stake_weights;
    }
  } else {
    console.error("API request failed:", response.statusText);
  }
};
</script>
