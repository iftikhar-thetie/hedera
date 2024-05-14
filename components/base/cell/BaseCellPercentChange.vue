<template>
  <div class="flex h-full items-center" :class="params?.justifyStart ? 'justify-start' : 'justify-end'">
    <BasePercent :percent="params?.value" :decimals="2" />
  </div>
</template>
<script setup>
const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});
</script>
