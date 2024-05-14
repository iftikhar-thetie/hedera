<template>
  <div :class="['flex flex-col overflow-hidden rounded text-xs text-slate-100 font-medium']">
    <div :class="['md:flex md:flex-row items-center md:justify-between space-y-4 md:space-y-0 md:space-x-10 py-4']">
      <div class="flex flex-1 font-semibold text-lg overflow-hidden text-ellipsis whitespace-nowrap">
        <slot name="icon"></slot>
        <a :href="`#${label.toLowerCase().replaceAll(' ', '-')}`">
          {{ label }}
        </a>
      </div>
      <div>
        <slot name="controls" />
      </div>
    </div>
    <div class="flex flex-1 flex-col">
      <slot />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  label: String
});
</script>
