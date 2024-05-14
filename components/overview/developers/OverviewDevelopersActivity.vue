<template>
  <BaseCard>
    <template #header>Developers Activity</template>
    <template #controls>
      <BaseSelect
        v-model="activityTypes"
        multiple
        button-width-class="w-32"
        :options="activityTypeOptions"
        placeholder="Select Activity"
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

//DEVELOPERS ACTIVITY
const activityTypes = ref(['active', 'commits']);
const activityTypeOptions = [
  { id: 'active', label: 'Active' },
  { id: 'commits', label: 'Commits' }
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
      name: 'Active',
      color: colors.green[400],
      data: randomSeries(0, 10, 20)
    },
    {
      name: 'Commits',
      color: colors.orange[300],
      data: randomSeries(0, 10, 20)
    }
  ];
});
</script>
