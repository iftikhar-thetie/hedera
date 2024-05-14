<template>
  <BaseCard>
    <template #header>Social Activity</template>
    <template #controls>
      <BaseSelect
        v-model="activityTypes"
        multiple
        button-width-class="w-40"
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

const activityTypes = ref(['twitter', 'youtube']);
const activityTypeOptions = [
  { id: 'twitter', label: 'Twitter' },
  { id: 'youtube', label: 'YouTube' },
  { id: '4chan', label: '4chan' }
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
      name: 'Twitter',
      color: colors.fuchsia[400],
      data: randomSeries(100, 2000)
    },
    {
      name: 'YoutTube',
      color: colors.teal[400],
      data: randomSeries(100, 2000)
    },
    {
      name: '4chan',
      color: colors.blue[600],
      data: randomSeries(100, 2000)
    }
  ];
});
</script>
