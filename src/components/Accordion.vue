<script lang="ts" setup>
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import TriangleIcon from '@/components/TriangleIcon.vue'
import type {CollectionEntry} from "astro:content";

interface Props {
  faq: CollectionEntry<'faq'>[]
}

const props = defineProps<Props>()
</script>

<template>

  <Accordion class="gap-4 grid xl:gap-6" collapsible type="single">
    <AccordionItem
        v-for="(item, index) in props.faq"
        :key="index"
        :value="item.id"
        class="bg-white text-black"
    >
      <AccordionTrigger class="px-5 cursor-pointer text-xl xl:text-2xl items-center">
        {{ item.data.question }}
        <template #icon>
          <TriangleIcon/>
        </template>
      </AccordionTrigger>
      <AccordionContent class="px-5 md:text-base xl:text-lg">
        <div class="[&>ul]:list-disc [&>ul]:list-inside space-y-3 [&>ul]:space-y-1" v-html="item.rendered?.html" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>