<template>
  <BaseCard>
    <template #header>Top NFT Collections</template>
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
    collection: 'Planck Epoch Collectibles - Gravity',
    floor_price: 5500,
    mcap: 80120,
    volume: 80120,
    change_in_volume: 0.12
  },
  {
    collection: 'Hedera Crowns',
    floor_price: 5500,
    mcap: 80120,
    volume: 80120,
    change_in_volume: 0.12
  },
  {
    collection: 'Dead Poets Society',
    floor_price: 5500,
    mcap: 80120,
    volume: 80120,
    change_in_volume: 0.12
  },
  {
    collection: 'KLONES gone WRONG',
    floor_price: 5500,
    mcap: 80120,
    volume: 80120,
    change_in_volume: -0.12
  },
  {
    collection: '$CODES',
    floor_price: 5500,
    mcap: 80120,
    volume: 80120,
    change_in_volume: 0.12
  },
  {
    collection: 'Onboard Hedera By Orbis86',
    floor_price: 5500,
    mcap: 80120,
    volume: 80120,
    change_in_volume: -0.12
  },
  {
    collection: '10%',
    floor_price: 5500,
    mcap: 80120,
    volume: 80120,
    change_in_volume: 0.12
  }
];
const columnDefs = [
  { headerName: 'Rank', valueGetter: 'node.rowIndex + 1', maxWidth: 50 },
  { headerName: 'Collection', field: 'collection' },
  {
    headerName: 'Floor Price',
    field: 'floor_price',
    valueFormatter: params => {
      const p = params?.data?.floor_price || null;
      return p ? `$${formatNumber(p)}` : '-';
    }
  },
  {
    headerName: 'Market Cap',
    field: 'mcap',
    valueFormatter: params => {
      const p = params?.data?.mcap || null;
      return p ? `$${formatNumber(p)}` : '-';
    }
  },
  {
    headerName: 'Volume',
    field: 'volume',
    valueFormatter: params => {
      const p = params?.data?.volume || null;
      return p ? `$${formatNumber(p)}` : '-';
    }
  },
  { headerName: 'Change in Vol.', field: 'change_in_volume', type: 'rightAligned', cellRenderer: BaseCellPercentChange }
];
</script>
