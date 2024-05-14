<template>
  <div
    v-if="params?.value?.dollars"
    class="flex h-full flex-col justify-center"
    :class="params?.justifyStart ? 'items-start' : 'items-end'"
  >
    <div class="leading-4">${{ roundedDollars }}</div>
    <div class="text-slate-400 leading-4">
      {{ roundedTokens }}
      {{ params?.value?.ticker }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { rounded } from '~/utils/helpers';

const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});

const decimals = computed(() => {
  if (props.params && 'decimals' in props.params && typeof props.params.decimals == 'number')
    return props.params?.decimals;

  return 2;
});

const roundedDollars = computed(() => rounded(props.params?.value?.dollars, decimals.value));

const roundedTokens = computed(() => rounded(props.params?.value?.tokens, decimals.value));
</script>
