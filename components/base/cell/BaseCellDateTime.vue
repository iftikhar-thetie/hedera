<template>
  <div
    v-if="dateTime != 'Invalid DateTime'"
    class="flex h-full items-center"
    :class="params?.justifyStart ? 'justify-start' : 'justify-end'"
  >
    {{ dateTime }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { readableDate, minimalTimeWithinToday } from '~/utils/helpers';
const dateTime = computed(() =>
  props.params?.dateOnly ? readableDate(props.params?.value, true) : minimalTimeWithinToday(props.params?.value)
);

const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});
</script>
