<template>
  <div class="space-y-2">
    <div>
      <span class="text-xs text-neutral-100">
        <slot />
      </span>
    </div>
    <div class="flex justify-between">
      <BaseTooltip v-for="i in last60Records" :key="i">
        <template #target>
          <div :class="[
            'h-4 w-1 transition-all duration-100 ease-linear',
            activeItem == i ? 'scale-125' : ''
          ]" @mouseenter="activeItem = i" @mouseleave="activeItem = null" :style="{ backgroundColor: i }"></div>
        </template>
        <template #default> {{ i == "#2F93FF" ? "No Outage" : "Partially Outage" }} </template>
      </BaseTooltip>
    </div>
    <div class="flex justify-between">
      <span class="block text-neutral-400 text-xs">60 days ago</span>
      <span class="block text-neutral-400 text-xs"> {{ status.uptime }} Uptime</span>
      <span class="block text-neutral-400 text-xs">Today</span>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
const activeItem = ref(null);
const props = defineProps({
  status: Object
});
const last60Records = computed(() => {
  return props.status.historicalData.slice(-60)
})
</script>
