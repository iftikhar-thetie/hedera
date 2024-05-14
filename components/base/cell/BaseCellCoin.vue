<template>
  <a
    v-if="params && params.value"
    :href="params?.value.href"
    class="flex h-full w-full items-center gap-2 justify-between"
  >
    <div class="flex h-full w-full items-center gap-2">
      <BaseCoinIcon class="h-4 w-4" :coin="params.value.uid" />
      <div class="h-full flex flex-col justify-center">
        <div class="flex items-center space-x-2 text-sm text-slate-100 leading-4">
          <div>{{ truncatedName }}</div>
        </div>
        <div class="text-slate-400 leading-4">
          {{ params.value.ticker }}
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { truncate } from '~/utils/helpers';
const truncatedName = computed(() => truncate(props.params?.value.name || '', 12));
const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});
</script>
