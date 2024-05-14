<template id="app_template">
  <div id="app_div" class="bg-black text-neutral-100">
    <DefaultLayout class="mx-auto ">
      <NuxtPage :key="$route.fullPath" />
    </DefaultLayout>
  </div>
</template>
<script setup>
import Highcharts from 'highcharts'
import DefaultLayout from "~/layout/DefaultLayout.vue";
import { baseHighchartsTheme } from '~/utils/ChartBaseTheming';

if(typeof Highcharts === 'object') {
  Highcharts.setOptions(baseHighchartsTheme());
}
</script>
