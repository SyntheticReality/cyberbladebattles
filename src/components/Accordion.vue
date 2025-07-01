<script lang="ts" setup>
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import TriangleIcon from '@/components/TriangleIcon.vue'

interface Props {
  data: {
    title: string,
    content: string,
  }[]
}

const props = defineProps<Props>()
</script>

<template>
  <Accordion class="gap-4 grid xl:gap-6" collapsible type="single">
    <AccordionItem
        v-for="(item, index) in props.data"
        :key="index"
        :value="index.toString()"
        class="bg-white text-black"
    >
      <AccordionTrigger class="px-5 cursor-pointer text-xl xl:text-2xl items-center">
        {{ item.title }}
        <template #icon>
          <TriangleIcon/>
        </template>
      </AccordionTrigger>
      <AccordionContent class="px-5 md:text-base xl:text-lg">
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>