<template>
  <BaseSection :label="'Validators'">
    <div class="md:flex space-y-4 md:space-y-0 md:space-x-4 justify-between overflow-x-auto w-full">
      <OverviewValidatorsNetworkUptime class="md:w-1/3 h-80" />
      <OverviewValidatorsDistribution class="md:w-1/3 h-80" />
      <OverviewValidatorsStakedWeight class="md:w-1/3 h-80" />
    </div>
  </BaseSection>
</template>
<script setup></script>
