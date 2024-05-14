<template>
  <BaseCard>
    <template #header>Validator distribution by country</template>
    <div class="px-1 h-full w-full">
      <BaseTable class="h-full" :column-defs="columnDefs" :row-height="40" :row-data="validatorsByCountryLatest"
        :default-col-def="{
          flex: 1,
          sortable: true
        }" />
    </div>
  </BaseCard>
</template>
<script setup>
import BaseCellPercent from '~/components/base/cell/BaseCellPercent.vue';
import BaseCellLineChart from '~/components/base/cell/BaseCellLineChart.vue';
import colors from 'tailwindcss/colors';

onMounted(() => {
  fetchData();
});

const validatorsByCountryHistorical = ref([])
const validatorsByCountryLatest = ref([])
// Define a function to fetch your API data
const fetchData = async () => {
  const response = await fetch(
    `/api/fetch/Overview:StakedWeight`
  );

  if (response.ok) {
    let jsonData;
    try {
      jsonData = await response?.json();
    } catch (error) {
      console.log("An error occurred while parsing JSON:", error);
    }
    if (jsonData) {
      validatorsByCountryLatest.value = jsonData?.validators_by_country_latest

      const groupedData = jsonData?.validators_by_country_historical.reduce((acc, item) => {
        let country = item.country;
        let values = [item.country_weight];

        if (!acc[country]) {
          acc[country] = { country, values: [] };
        }

        acc[country].values.push(values[0]);

        return acc;
      }, {});

      const result = Object.values(groupedData);
      validatorsByCountryHistorical.value = result
      validatorsByCountryLatest.value['historical'] = result
    }
  } else {
    console.error("API request failed:", response.statusText);
  }
};

//VALIDATORS
const columnDefs = [
  {
    headerName: 'Country',
    field: 'country',
    cellStyle: { display: 'flex', 'align-items': 'center' }
  },
  {
    headerName: 'Validators',
    field: 'country_weight',
    cellRenderer: BaseCellPercent,
    cellRendererParams: { justifyStart: true }
  },
  {
    headerName: 'Stake Weight',
    field: 'stake_weight',
    cellRenderer: BaseCellLineChart,
    valueGetter: params => {
      return [
        {
          name: 'Stake Weight',
          color: params.data.validators > 0 ? colors.green[400] : colors.red[400],
          data: assembleData(params.data.country)
        }
      ];
    },
    type: 'rightAligned'
  }
];

function assembleData(selectedCountry) {
  let values = validatorsByCountryLatest.value.historical.find(item => item?.country == selectedCountry)?.values
  return values.map(item => parseFloat(item))
}

</script>
