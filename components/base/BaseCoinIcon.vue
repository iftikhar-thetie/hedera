<template>
  <img :src="imageURL" class="rounded-full" loading="lazy" :alt="`${coin} icon`" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  coin: {
    type: String,
    default: ''
  }
});

const imageURL = computed(() => `https://the-tie-sigdev.s3.amazonaws.com/coin_images/${props.coin}.png`);
</script>
