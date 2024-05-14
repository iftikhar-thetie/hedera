<template>
  <div class="flex bg-neutral-900 h-80 rounded">
    <BaseCard class="w-1/2">
      <template #header>Most active github repos</template>
      <div class="h-full px-2 w-full">
        <BaseChart :options="options" :series="series" />
      </div>
    </BaseCard>
    <ChartLegendOptions class="w-1/2 h-full" :options="legendOptions" classes="h-full"> Top 5 repositories
    </ChartLegendOptions>
  </div>
</template>
<script setup>
import Highcharts from 'highcharts';

//ACTIVE GITHUB REPOS
const options = {
  chart: {
    type: 'bar'
  },
  xAxis: {
    categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Repos'
    }
  },
  legend: {
    enabled: false,
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      borderWidth: 0,
      pointWidth: 8
    }
  }
};
const series = [
  {
    name: 'Cristiano Ronaldo',
    data: [4, 4, 6, 15, 12]
  },
  {
    name: 'Lionel Messi',
    data: [5, 3, 12, 6, 11]
  },
  {
    name: 'Robert Lewandowski',
    data: [5, 15, 8, 5, 8]
  }
];

const legendOptions = computed(() => {
  const colors = Highcharts.getOptions().colors.map(c => c);
  return series.map((x, i) => {
    return {
      name: x.name,
      color: colors[i % series.length]
    };
  });
});
</script>
