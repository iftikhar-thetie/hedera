<template>
  <div class="flex h-full items-center" :class="params?.justifyStart ? 'justify-start' : 'justify-end'">
    {{ params?.prefix }}
    {{ roundedNumber }}
    {{ params?.value == 1 ? params?.singularSuffix : params?.suffix }}
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

const roundedNumber = computed(() => rounded(props.params?.value, decimals.value));
</script>
