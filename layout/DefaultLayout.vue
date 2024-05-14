<template>
  <div class="flex flex-col min-h-screen font-inter">
    <AppHeader />
    <main class="flex-grow">
      <!-- Your page content goes here -->
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>
