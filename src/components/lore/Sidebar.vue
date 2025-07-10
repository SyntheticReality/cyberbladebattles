<script lang="ts" setup>
import {Button} from '@/components/ui/button'
import {cn} from "@/lib/utils.ts";
import {BookOpen} from "lucide-vue-next";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from '@/components/ui/sheet'

interface Props {
  categories: {
    title: string;
    slug: string;
    items: {
      title: string;
      slug: string;
      isActive?: boolean;
    }[];
  }[];
}

const props = defineProps<Props>()
</script>

<template>
  <Sheet>
    <SheetTrigger as-child class="fixed bottom-4 left-4 lg:hidden">
      <Button size="icon" variant="outline">
        <BookOpen class="text-black"/>
      </Button>
    </SheetTrigger>
    <SheetContent class="bg-neutral-950 overflow-y-auto" side="left">
      <SheetHeader class="gap-0">
        <SheetTitle class="text-white">Lore</SheetTitle>
      </SheetHeader>
      <div class="py-4 px-4">
        <ul class="space-y-8">
          <li v-for="(category, index) in props.categories" :key="index">
            <h2 class="text-2xl">{{ category.title }}</h2>
            <ul class="list-disc list-inside mt-2 ps-4 ">
              <li v-for="(item, listIndex) in category.items" :key="listIndex"
                  :class="cn('text-lg',
                    item.isActive ? 'text-brand-primary' : 'text-white'
                  )">
                <a :href="`/lore/${item.slug}`" class="hover:underline">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </SheetContent>
  </Sheet>
</template>

