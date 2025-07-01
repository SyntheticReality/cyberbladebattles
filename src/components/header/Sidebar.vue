<script lang="ts" setup>
import {Button} from '@/components/ui/button'
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from '@/components/ui/sheet'
import {Menu} from "lucide-vue-next";
</script>

<template>
  <div class="md:hidden">
    <Sheet>
      <SheetTrigger as-child>
        <Button size="icon" variant="outline">
          <Menu class="size-4 text-black"/>
        </Button>
      </SheetTrigger>
      <SheetContent class="bg-neutral-950">
        <SheetHeader>
          <SheetTitle>
            <img alt="Logo" class="w-24" src="/images/logo-white.svg">
          </SheetTitle>
          <SheetDescription>
            Main menu
          </SheetDescription>
        </SheetHeader>
        <div class="px-5">
          <slot/>
        </div>
      </SheetContent>
    </Sheet>
  </div>

</template>
