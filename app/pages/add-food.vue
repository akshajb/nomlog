<template>
  <main class="container mx-auto">
    <FoodForm @submit="handleSubmit" />
  </main>
</template>
<script setup lang="ts">
import FoodForm from "~/components/forms/FoodForm.vue";
import type { AddFoodPayload } from "~/models/Food";
import { useFoodStore } from "~/stores/FoodStore";
import { toast } from "@/components/ui/toast";

const foodStore = useFoodStore();

const handleSubmit = async (payload: AddFoodPayload) => {
  try {
    await foodStore.addFood(payload);

    toast({
      title: "Food added successfully",
      description: `You have added ${payload.foodName} from ${payload.restaurantName}, ${payload.city}.`,
      variant: "success",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : `There was an error while adding ${payload.foodName}. Please try again.`;

    toast({
      title: "Failed to add Food",
      description: message,
      variant: "destructive",
    });
    console.error("Error adding food:", error);
  }
};
</script>
