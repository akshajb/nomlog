<template>
  <div class="container mx-auto flex flex-col h-screen">
    <MainNav />
    <NuxtPage class="flex-1" />
    <ClientOnly>
      <Toaster />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import MainNav from "./components/MainNav.vue";
import { Toaster } from "@/components/ui/toast";
</script>
