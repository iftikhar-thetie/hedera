<template>
  <BaseCard>
    <template #header>Developers Count</template>
    <template #controls>
      <BaseSelect
        v-model="developerTypes"
        multiple
        button-width-class="w-32"
        :options="developerTypeOptions"
        placeholder="Select Type"
      />
    </template>
    <div class="h-full px-2 w-full">
      <BaseChart :options="developerOptions" :series="developerSeries" />
    </div>
  </BaseCard>
</template>
<script setup>
import colors from 'tailwindcss/colors';
import { randomSeries } from '~/utils/helpers';

//DEVELOPERS COUNT
const developerTypes = ref(['new', 'churned']);
const developerTypeOptions = [
  { id: 'new', label: 'New' },
  { id: 'churned', label: 'Churned' }
];
const developerOptions = computed(() => {
  return {
    chart: {
      id: 'developers-count-chart'
    },
    xAxis: {
      // type: 'datetime',
    }
  };
});
const developerSeries = computed(() => {
  return [
    {
      name: 'New',
      color: colors.fuchsia[400],
      data: randomSeries(100, 110, 20)
    },
    {
      name: 'Churned',
      color: colors.blue[600],
      data: randomSeries(100, 110, 20)
    }
  ];
});
</script>
