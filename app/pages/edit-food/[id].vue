<template>
  <main class="container mx-auto">
    <FoodForm :food="food" @submit="handleSubmit" />
  </main>
</template>
<script setup lang="ts">
import FoodForm from "~/components/forms/FoodForm.vue";
import type { AddFoodPayload } from "~/models/Food";
import { useFoodStore } from "~/stores/FoodStore";
import { toast } from "@/components/ui/toast";

const foodStore = useFoodStore();
const route = useRoute();
const food = await foodStore.getFoodById(route.params.id as string);

const handleSubmit = async (payload: AddFoodPayload) => {
  try {
    if (food) {
      await foodStore.editFood({
        ...food,
        ...payload,
      });
      toast({
        title: "Food edited successfully",
        description: `You have edited ${payload.foodName} from ${payload.restaurantName}, ${payload.city}.`,
        variant: "success",
      });
    }
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : `There was an error while editing ${payload.foodName}. Please try again.`;

    toast({
      title: "Failed to edit Food",
      description: message,
      variant: "destructive",
    });
    console.error("Error editing food:", error);
  }
};
</script>
