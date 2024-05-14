<template>
  <BaseSection :label="'30D aggregated values of all use cases'">
    <div class="space-y-4">
      <div class="h-28 md:h-40 rounded bg-neutral-900">
        <div class="flex w-full h-full">
          <div class="flex flex-col justify-center w-1/2 md:w-1/4 px-4">
            <span class="font-normal text-neutral-400 text-xs block">Transaction Volume</span>
            <span class="block text-white text-xl tracking-widest">{{ formatNumber(232321312) }}</span>
          </div>
          <div class="w-1/2 md:w-3/4">
            <BaseChart :options="options" :series="series" />
          </div>
        </div>
      </div>
      <div class="h-28 md:h-40 rounded bg-neutral-900">
        <div class="flex w-full h-full">
          <div class="flex flex-col justify-center w-1/2 md:w-1/4 px-4">
            <span class="font-normal text-neutral-400 text-xs block">Accounts</span>
            <span class="block text-white text-xl tracking-widest">{{ formatNumber(232321312) }}</span>
          </div>
          <div class="w-1/2 md:w-3/4">
            <BaseChart :options="options" :series="series" />
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
<script setup>
import colors from 'tailwindcss/colors';
import { formatNumber, randomSeries } from '~/utils/helpers';

const options = computed(() => {
  return {
    yAxis: { visible: false }
  };
});
const series = computed(() => {
  return [
    {
      name: 'New',
      data: randomSeries(0, 100),
      zoneAxis: 'x',
      zones: [
        {
          value: 2,
          color: {
            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
            stops: [
              [0, colors.teal[400]],
              [1, colors.teal[200]]
            ]
          }
        },
        {
          color: {
            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
            stops: [
              [0, colors.teal[200]],
              [1, colors.purple[400]]
            ]
          }
        }
      ]
      // zones: [
      //   { value: 2, color: colors.teal[300]},
      //   { value: 4, color: colors.teal[100]},
      //   { value: 6, color: colors.purple[100]},
      //   { value: 40000, color: colors.purple[300]},
      // ]
    }
  ];
});
</script>
