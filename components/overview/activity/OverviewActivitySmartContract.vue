<template>
  <BaseCard>
    <template #header>Smart Contact Activity</template>
    <div class="w-full h-full px-1">
      <BaseTable
        class="h-full"
        :column-defs="columnDefs"
        :row-data="rowData"
        :default-col-def="{
          flex: 1,
          sortable: true
        }"
      />
    </div>
  </BaseCard>
</template>
<script setup>
import BaseCellDateTime from '~/components/base/cell/BaseCellDateTime.vue';
import { formatNumber } from '~/utils/helpers';
const rowData = [
  { date: '2024-01-02', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-02', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-02', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Write', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Write', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Write', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 },
  { date: '2024-01-01', contracts: 512, method: 'Read', unique_users: 82123, gas_fee: 1.02 }
];
const columnDefs = ref([
  {
    headerName: 'Date',
    field: 'date',
    cellRenderer: BaseCellDateTime,
    cellRendererParams: { dateOnly: true, justifyStart: true }
  },
  {
    headerName: 'Contracts Deployed',
    field: 'contracts',
    valueFormatter: params => formatNumber(params.data.contracts)
  },
  { headerName: 'Invocation Method', field: 'method' },
  {
    headerName: 'Unique Users',
    field: 'unique_users',
    valueFormatter: params => formatNumber(params.data.unique_users)
  },
  {
    headerName: 'Gas Fee',
    field: 'gas_fee',
    type: 'rightAligned',
    valueFormatter: params => `$${formatNumber(params.data.gas_fee)}`
  }
]);
</script>
