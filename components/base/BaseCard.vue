<template>
  <div :class="['flex flex-col overflow-hidden rounded text-xs bg-neutral-900 text-slate-100 font-medium']">
    <div :class="['flex flex-row items-center justify-between space-x-10 p-4']">
      <span class="flex-1 overflow-hidden text-ellipsis text-sm leading-4 whitespace-nowrap">
        <slot name="header" />
      </span>
      <span>
        <slot name="controls" />
      </span>
    </div>
    <div class="flex flex-1 flex-col overflow-auto bg-neutral-900">
      <slot />
    </div>
  </div>
</template>
