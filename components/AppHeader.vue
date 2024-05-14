<template>
  <nav class="bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50">
    <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex space-x-4">
        <a href="/" class="flex items-center rtl:space-x-reverse">
          <img :src="HederaLogoShort" class="h-8 md:hidden" alt="Hedera Logo" />
          <img :src="HederaLogoFull" class="h-8 hidden md:block" alt="Hedera Logo" />
        </a>
        <div class="border-r border-neutral-800"></div>
        <a
          href="https://www.thetie.io/solutions/the-tie-terminal/"
          target="_blank"
          class="flex items-center rtl:space-x-reverse"
        >
          <img :src="TieLogoShort" class="h-8 md:hidden" alt="Tie Logo" />
          <img :src="TieLogoFull" class="h-4 hidden md:block" alt="Tie Logo" />
        </a>
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-400 rounded-lg md:hidden focus:outline-none focus:ring-0 focus:ring-neutral-900 hover:bg-neutral-800"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="displayMenu = !displayMenu"
      >
        <span class="sr-only">Open main menu</span>
        <XMarkIcon v-if="displayMenu" class="w-5 h-5" />
        <Bars4Icon v-else class="w-5 h-5" />
      </button>
      <div :class="displayMenu ? '' : 'hidden'" class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-2 md:p-0 mt-4 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li v-for="l in links" :key="l.link">
            <nuxt-link
              :to="l.link"
              class="hover:bg-blue-400/10 hover:font-medium text-xs block py-1 px-2 text-neutral-100 rounded-md"
              aria-current="page"
            >
              {{ l.text }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue';
import TieLogoFull from '@/assets/icons/tie_logo_full.svg';
import TieLogoShort from '@/assets/icons/tie_logo_short.svg';
import HederaLogoShort from '@/assets/icons/hedera_logo_short.svg';
import HederaLogoFull from '@/assets/icons/hedera_logo_full.svg';
import { Bars4Icon, XMarkIcon } from '@heroicons/vue/24/solid';

const links = [
  { text: 'Overview', link: '/' },
  { text: 'Use Cases', link: '/use-cases' }
];
const displayMenu = ref(false);
</script>
