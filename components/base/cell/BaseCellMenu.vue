<template>
  <div class="flex h-full items-center justify-end">
    <BaseMenu
      :items="params?.items"
      position="right"
      width-class="w-32"
      portal
      @action="params?.context.actionHandler($event)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  params: {
    type: Object,
    default: undefined
  }
});
</script>
