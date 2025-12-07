<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFoodStore } from "~/stores/FoodStore";

const emit = defineEmits<{
  select: [value: string];
}>();

const { cities } = useFoodStore();
const selectedCity = ref<string>("");

watch(selectedCity, (newCity) => {
  console.log("Selected city:", newCity);
  emit("select", newCity);
});
</script>

<template>
  <Select v-model="selectedCity">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl text-chart-1 underline italic">Food you loved in</h2>
      <SelectTrigger class="w-[120px] bg-chart-1">
        <SelectValue placeholder="Select City" />
      </SelectTrigger>
    </div>
    <SelectContent>
      <SelectGroup>
        <!-- <SelectLabel>City</SelectLabel> -->
        <SelectItem v-for="city in cities" :key="city" :value="city">
          {{ city }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
