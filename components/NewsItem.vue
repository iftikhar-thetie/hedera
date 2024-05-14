<template>
  <div class="flex bg-neutral-900 justify-between py-4 px-1">
    <div class="space-y-1 md:space-y-0 md:flex md:space-x-4 w-full">
      <div class="flex space-x-2 capitalize">
        <span class="block text-xs text-neutral-400 whitespace-nowrap">
          {{ DateTime.fromISO(news.timestamp).toFormat('LLL dd') }}
        </span>
        <span class="block text-xs text-neutral-400 whitespace-nowrap">
          {{ DateTime.fromISO(news.timestamp).toFormat('hh:mm a') }}
        </span>
      </div>
      <div class="space-y-2">
        <a :href="news.link" target="_blank" class="text-xs text-neutral-100 line-clamp-2">
          {{ news.translated_headline || news.headline }}
        </a>
        <div class="flex space-x-1">
          <div
            v-for="t in ['atma', 'hedera', 'xeni-pay', 'karate-combat', 'abrdn']"
            :key="t"
            class="rounded px-1 py-px capitalize"
            :style="{ 'background-color': `${tagColors[t].bg}50`, color: tagColors[t].color }"
          >
            {{ t.replace('-', ' ') }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <BaseCellPercentChange :params="{ value: 0.67 }" />
    </div>
  </div>
</template>
<script setup>
import { DateTime } from 'luxon';
import colors from 'tailwindcss/colors';
const props = defineProps({
  news: Object
});

const tagColors = {
  atma: { bg: colors.purple[900], color: colors.purple[300] },
  hedera: { bg: colors.indigo[900], color: colors.indigo[300] },
  'xeni-pay': { bg: colors.cyan[900], color: colors.cyan[300] },
  'karate-combat': { bg: colors.orange[900], color: colors.orange[300] },
  abrdn: { bg: colors.fuchsia[900], color: colors.fuchsia[300] }
};
</script>
