<template>
  <BaseSection :label="'Developers'">
    <template #controls>
      <BaseRadio v-model="selectedTimeframe" :options="timeframeOptions" />
    </template>
    <div class="space-y-4 md:space-y-0 md:flex md:space-x-4 justify-between overflow-x-auto w-full">
      <OverviewDevelopersCount class="md:w-1/3 h-80" />
      <OverviewDevelopersActivity class="md:w-1/3 h-80" />
      <OverviewDevelopersActiveGithubRepos class="md:w-1/3 h-80" />
    </div>
  </BaseSection>
</template>
<script setup>
import { ref } from 'vue';
const selectedTimeframe = ref('30D');
const timeframeOptions = ['24H', '7D', '30D', '3M', '6M', '1Y', 'YTD', 'ALL'];
</script>
