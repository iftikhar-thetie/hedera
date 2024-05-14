<template>
  <BaseCard>
    <template #header>Network Uptime</template>
    <template #controls>
      <span class="text-sm text-blue-500">All Systems Operational</span>
    </template>
    <div class="h-full px-4">
      <div class="flex flex-col justify-between space-y-6">
        <div v-for="obj in statusPage" :key="obj">
          <UptimeMonitor :status="{ uptime: obj.uptime, historicalData: obj.rectangles }"> {{ obj.network }}
          </UptimeMonitor>
        </div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup>
const statusPage = ref([])
onMounted(() => {
  fetchData();
});

// Define a function to fetch your API data
const fetchData = async () => {
  const response = await fetch(
    `/api/fetch/Overview:NetworkUptime`
  );
  if (response.ok) {
    let jsonData;
    try {
      jsonData = await response?.json();
    } catch (error) {
      console.log("An error occurred while parsing JSON:", error);
    }
    if (jsonData) {
      statusPage.value = jsonData;
    }
  } else {
    console.error("API request failed:", response.statusText);
  }
};
</script>
