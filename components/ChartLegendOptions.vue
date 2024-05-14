<template>
  <BaseCard>
    <template #header>
      <slot />
    </template>
    <div class="w-full my-1" :class="classes">
      <div class="flex flex-col h-full justify-center space-y-2">
        <div v-for="o in options" :key="o.name" class="flex items-center space-x-2">
          <div class="w-3 h-3 rounded" :style="{ 'background-color': o.color }"></div>
          <div class="font-normal truncate text-neutral-400 text-xs">{{ o.name }}</div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup>
const props = defineProps({
  options: Array,
  classes: String
});
</script>
