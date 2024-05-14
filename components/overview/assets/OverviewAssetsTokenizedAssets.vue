<template>
  <BaseCard>
    <template #header>Top Tokenized Assets</template>
    <div class="px-1 w-full h-full">
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
import { formatNumber } from '~/utils/helpers';
import BaseCellPercentChange from '~/components/base/cell/BaseCellPercentChange.vue';
const rowData = [
  {
    asset: 'Planck Epoch Collectibles - Gravity',
    price: 5500,
    change_in_volume: 0.12
  },
  {
    asset: 'Hedera Crowns',
    price: 5500,
    change_in_volume: 0.12
  },
  {
    asset: 'Dead Poets Society',
    price: 5500,
    change_in_volume: 0.12
  },
  {
    asset: 'KLONES gone WRONG',
    price: 5500,
    change_in_volume: 0.12
  },
  {
    asset: '$CODES',
    price: 5500,
    change_in_volume: 0.12
  },
  {
    asset: 'Onboard Hedera By Orbis86',
    price: 5500,
    change_in_volume: 0.12
  },
  {
    asset: '10%',
    price: 5500,
    change_in_volume: 0.12
  }
];
const columnDefs = [
  { headerName: 'Rank', valueGetter: 'node.rowIndex + 1', maxWidth: 50 },
  { headerName: 'Asset', field: 'asset' },
  {
    headerName: 'Price',
    field: 'price',
    valueFormatter: params => {
      const p = params?.data?.price || null;
      return p ? `$${formatNumber(p)}` : '-';
    }
  },
  { headerName: 'Change in Vol.', field: 'change_in_volume', type: 'rightAligned', cellRenderer: BaseCellPercentChange }
];
</script>
