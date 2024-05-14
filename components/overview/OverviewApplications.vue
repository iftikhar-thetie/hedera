<template>
  <BaseSection :label="'Applications'">
    <template #controls>
      <BaseRadio v-model="selectedTimeframe" :options="timeframeOptions" />
    </template>
    <BaseCard>
      <template #header>Top Applications</template>
      <div class="px-1 w-full h-[28rem]">
        <div class="h-96">
          <BaseTable
            class="h-full"
            :column-defs="columnDefs"
            :row-height="40"
            :row-data="rowData"
            :default-col-def="{
              flex: 1,
              sortable: true
            }"
            @grid-ready="onGridReady"
          />
        </div>
        <div class="p-2 border-t border-neutral-800">
          <BasePaginate v-model="page" :pages="10" />
        </div>
      </div>
    </BaseCard>
  </BaseSection>
</template>
<script setup>
import { formatNumber, randomSeries } from '~/utils/helpers';
import BaseCellLineChart from '~/components/base/cell/BaseCellLineChart.vue';
import BaseCellCoin from '~/components/base/cell/BaseCellCoin.vue';
import BaseCellPercentChange from '~/components/base/cell/BaseCellPercentChange.vue';
import colors from 'tailwindcss/colors';

const page = ref(1);
const selectedTimeframe = ref('30D');
const timeframeOptions = ['24H', '7D', '30D', '3M', '6M', '1Y', 'YTD', 'ALL'];
const gridApi = ref(null);
function onGridReady(params) {
  gridApi.value = params.api;
  gridApi.value.sizeColumnsToFit();
}
const rowData = [
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: 0.12,
    volume: 456789,
    change_in_volume: 0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: -0.12,
    volume: 456789,
    change_in_volume: 0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: 0.12,
    volume: 456789,
    change_in_volume: -0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: -0.12,
    volume: 456789,
    change_in_volume: 0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: 0.12,
    volume: 456789,
    change_in_volume: 0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: -0.12,
    volume: 456789,
    change_in_volume: -0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: 0.12,
    volume: 456789,
    change_in_volume: -0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: 0.12,
    volume: 456789,
    change_in_volume: -0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: 0.12,
    volume: 456789,
    change_in_volume: -0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: 0.12,
    volume: 456789,
    change_in_volume: -0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  },
  {
    index: 1,
    coin: { uid: 'bitcoin', href: '#', name: 'Bitcoin' },
    users: 102591,
    user_change: 0.12,
    volume: 456789,
    change_in_volume: -0.12,
    users_over_time: [12, 23, 32, 12, 43, 123, 54, 123, 345, 123, 345, 12, 53, 123, 3]
  }
];
const columnDefs = [
  {
    headerName: '#',
    valueGetter: 'node.rowIndex + 1',
    width: 30,
    cellStyle: { display: 'flex', 'align-items': 'center' }
  },
  {
    headerName: 'Name',
    field: 'coin',
    cellRenderer: BaseCellCoin,
    minWidth: 100,
    cellStyle: { display: 'flex', 'align-items': 'center' }
  },
  {
    headerName: 'Users',
    field: 'users',
    valueFormatter: params => formatNumber(params.data.users),
    minWidth: 100,
    cellStyle: { display: 'flex', 'align-items': 'center' }
  },
  {
    headerName: 'User change',
    field: 'user_change',
    cellRenderer: BaseCellPercentChange,
    minWidth: 100,
    cellRendererParams: { justifyStart: true }
  },
  {
    headerName: 'Volume',
    field: 'volume',
    minWidth: 100,
    valueFormatter: params => formatNumber(params.data.users),
    cellStyle: { display: 'flex', 'align-items': 'center' }
  },
  {
    headerName: 'Change in Volume',
    field: 'change_in_volume',
    cellRenderer: BaseCellPercentChange,
    minWidth: 100,
    cellRendererParams: { justifyStart: true }
  },
  {
    headerName: 'Users over time',
    field: 'users_over_time',
    type: 'rightAligned',
    minWidth: 150,
    cellRenderer: BaseCellLineChart,
    valueGetter: params => {
      return [
        {
          name: 'Users over time',
          color: params.data.change_in_volume > 0 ? colors.green[400] : colors.red[400],
          data: randomSeries(0, 50, 20)
        }
      ];
    }
  }
];
</script>
