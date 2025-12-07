<script setup lang="ts">
import type { Food } from "~/models/Food";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button as UiButton } from "@/components/ui/button";
import { LucideTrash, LucidePencil } from "lucide-vue-next";

const { food } = defineProps<{
  food: Food;
}>();

const emit = defineEmits<{
  edit: [Food];
  delete: [string];
}>();
</script>

<template>
  <Card class="relative">
    <CardHeader>
      <CardTitle>{{ food.foodName }}</CardTitle>
      <CardDescription>{{ food.restaurantName }} </CardDescription>
      <div class="card-actions absolute top-2 right-2 flex gap-2">
        <UiButton
          as-child
          size="icon"
          class="text-chart-1 bg-white"
          variant="reverse"
        >
          <NuxtLink :to="`/edit-food/${food.uuid}`">
            <LucidePencil />
          </NuxtLink>
        </UiButton>
        <UiButton
          size="icon"
          class="text-chart-2 bg-white"
          variant="reverse"
          @click="emit('delete', food.uuid)"
        >
          <LucideTrash />
        </UiButton>
      </div>
    </CardHeader>
  </Card>
</template>
