<template>
  <BaseSection :label="'Activity'">
    <template #controls>
      <BaseRadio v-model="selectedTimeframe" :options="timeframeOptions" />
    </template>
    <div class="space-y-4">
      <div class="space-y-4 md:space-y-0 md:flex md:space-x-4 w-full">
        <OverviewActivityEcosystem class="md:w-1/2 h-80" />
        <OverviewActivityRecentNews class="md:w-1/2 h-80" />
      </div>
      <div class="space-y-4 md:space-y-0 md:flex md:space-x-4 w-full">
        <OverviewActivitySmartContract class="md:w-1/2 h-80" />
        <OverviewActivitySocial class="md:w-1/2 h-80" />
      </div>
    </div>
  </BaseSection>
</template>
<script setup>
import { ref } from 'vue';
const selectedTimeframe = ref('30D');
const timeframeOptions = ['24H', '7D', '30D', '3M', '6M', '1Y', 'YTD', 'ALL'];
</script>
