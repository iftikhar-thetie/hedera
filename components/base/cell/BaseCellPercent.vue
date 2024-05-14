<template>
  <div
    class="flex h-full items-center text-neutral-200"
    :class="params?.justifyStart ? 'justify-start' : 'justify-end'"
  >
    {{ roundedPercent(props.params?.value, 2) }}
  </div>
</template>

<script setup lang="ts">
import { roundedPercent } from '~/utils/helpers';
const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});
</script>
