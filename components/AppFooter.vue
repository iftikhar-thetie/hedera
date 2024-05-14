<template>
  <footer class="bg-black border-t border-neutral-800">
    <div class="max-w-screen-2xl p-4 md:flex md:justify-between mx-auto space-y-4 md:space-y-0">
      <div class="md:flex space-y-4 md:space-y-0 md:space-x-10">
        <img :src="HederaLogoFull" alt="hedera logo" class="h-6 md:h-8" />
        <div class="flex items-center space-x-4">
          <a v-for="s in socials" :key="s.id" :href="s.link" target="_blank">
            <img :src="s.icon" :alt="s.id" class="hover:text-blue-200 h-6 w-6" />
          </a>
        </div>
      </div>
      <div class="flex items-center">
        <span class="text-xs md:text-sm text-neutral-400 leading-tight mr-2">Powered by</span>
        <a href="https://www.thetie.io/solutions/the-tie-terminal/" target="_blank">
          <img :src="TieLogoFull" alt="Tie Logo" class="h-3 md:h-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup>
import HederaLogoFull from '@/assets/icons/hedera_logo_full.svg';
import TieLogoFull from '@/assets/icons/tie_logo_full.svg';
import EnvelopeIcon from '@/assets/icons/envelope_icon.svg';
import GithubIcon from '@/assets/icons/github_icon.svg';
import RedditIcon from '@/assets/icons/reddit_icon.svg';
import DiscordIcon from '@/assets/icons/discord_icon.svg';

const socials = [
  { id: 'mail', icon: EnvelopeIcon, link: '' },
  { id: 'github', icon: GithubIcon, link: 'https://github.com/hashgraph' },
  { id: 'reddit', icon: RedditIcon, link: 'https://www.reddit.com/r/Hedera/' },
  { id: 'discord', icon: DiscordIcon, link: 'https://discord.com/invite/uJ5k8DkmKV' }
];
</script>
