<template>
  <ag-grid-vue class="ag-theme-balham-dark" v-bind="$attrs" :overlay-loading-template="overlayLoadingTemplate"
    :overlay-no-rows-template="overlayNoRowsTemplate" suppress-cell-focus />
</template>

<script setup lang="ts">
import { AgGridVue } from '@ag-grid-community/vue3';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';

ModuleRegistry.registerModules([ClientSideRowModelModule, InfiniteRowModelModule]);

const overlayLoadingTemplate = `
    <svg
      width="100%"
      height="100%"
      class="text-blue-600 w-6 h-6"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.75s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  `;

const overlayNoRowsTemplate = `
    <div class="flex items-center text-sm text-slate-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 pr-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
      No Data Found
    </div>
  `;
</script>
