<template>
  <BaseSection :label="'Network metrics overview'">
    <div class="grid grid-cols-2 md:flex gap-4 md:flex-row md:gap-0 md:space-x-4 justify-between overflow-x-auto w-full">
      <BaseCard v-for="(m, i) in dataMetrics" :key="m.title" :class="[i == 4 ? 'col-span-2' : '', 'md:w-1/5']">
        <template #header>
          <span class="text-neutral-400 text-sm">{{ m.title }}</span>
        </template>
        <template #controls>
          <BaseTooltip>
            <template #target>
              <InformationCircleIcon class="w-4 h-4 text-neutral-400 cursor-pointer hover:text-blue-200" />
            </template>
            <template #default>
              {{ m.title }}
            </template>
          </BaseTooltip>
        </template>
        <div class="px-4 pb-4">
          <span class="text-white text-xl font-normal leading-none tracking-widest">
            <template v-if="m.format === 'decimals'">
              {{ decimals(m.value) }}
            </template>
            <template v-else-if="m.format === 'big_number'"> ${{ formatBigNumber(m.value) }} </template>
            <template v-else>
              {{ formatNumber(m.value) }}
            </template>
          </span>
        </div>
      </BaseCard>
    </div>
  </BaseSection>
</template>
<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
import { formatNumber, decimals, formatBigNumber } from '~/utils/helpers';
const dataMetrics = ref(
  [
    { title: 'Total transactions', info: 'Total transactions ', key: "transactions_30_day", format: 'number' },
    { title: 'TPS', info: 'TPS ', key: "max_tps_30_day", format: 'number' },
    { title: 'Latency', info: 'Latency ', key: "latency", format: 'decimals' },
    { title: 'Accounts', info: 'Accounts ', key: "new_accounts_30_day", format: 'number' },
    { title: 'Total value locked', info: 'Total value locked ', key: "tvl", value: 41231231231231, format: 'big_number' }
  ]
)
onMounted(() => {
  fetchData();
});

// Define a function to fetch your API data
const fetchData = async () => {
  const response = await fetch(
    `/api/fetch/Overview:NetworkMetrics`
  );
  if (response.ok) {
    let jsonData;
    try {
      jsonData = await response?.json();
    } catch (error) {
      console.log("An error occurred while parsing JSON:", error);
    }
    if (jsonData) {
      dataMetrics.value.forEach((metric) => {
        const matchingObjProp = jsonData?.[metric.key];
        if (matchingObjProp) {
          metric.value = matchingObjProp;
        }
      });
    }
  } else {
    console.error("API request failed:", response.statusText);
  }
};
</script>
