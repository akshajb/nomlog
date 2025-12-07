<template>
  <nav
    class="p-4 border-border border-2 shadow-shadow rounded-base flex items-center justify-between gap-4 bg-secondary-background"
  >
    <NuxtLink to="/">
      <span class="text-2xl font-bold">Nom Log</span>
    </NuxtLink>
    <UiButton size="sm" as-child>
      <NuxtLink to="/add-food">
        <LucidePlusCircle />
        Food
      </NuxtLink>
    </UiButton>
  </nav>
</template>
<script setup lang="ts">
import { Button as UiButton } from "@/components/ui/button";
import { LucidePlusCircle } from "lucide-vue-next";
</script>
