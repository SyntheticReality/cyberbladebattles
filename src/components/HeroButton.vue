<script lang="ts" setup>
import {Button} from '@/components/ui/button'
</script>

<template>
  <Button asChild class="md:h-20 h-16 md:text-3xl text-xl md:px-12 px-10 cursor-pointer" variant="hero">
    <a href="https://www.meta.com/en-gb/experiences/cyberblade-battles/8148460338608857/" target="_blank">
      <div class="flex flex-col gap-1 justify-center items-center">
        Free to play
        <img alt="Meta Quest Logo" class="max-w-24" src="/images/meta-quest.webp">
      </div>
    </a>
  </Button>
</template>
