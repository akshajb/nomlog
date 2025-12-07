<template>
  <main class="my-4">
    <section>
      <ClientOnly>
        <Card v-if="foods.length > 0" class="p-4 bg-white">
          <CitySelect @select="selectedCity = $event" />
          <FoodCard
            v-for="food in filteredFoods"
            :key="food.uuid"
            :food="food"
            @delete="removeFood($event)"
          />
        </Card>
        <EmptyCard v-else>
          <p class="text-center text-chart-1 italic">
            No food entries found. Start by adding some of your favorites!
          </p>
        </EmptyCard>
      </ClientOnly>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { useFoodStore } from "~/stores/FoodStore";
import CitySelect from "~/components/CitySelect.vue";
import { Card } from "@/components/ui/card";
import FoodCard from "@/components/FoodCard.vue";
import { toast } from "~/components/ui/toast";
import { storeToRefs } from "pinia";
import EmptyCard from "~/components/EmptyCard.vue";

const foodStore = useFoodStore();
const { deleteFood } = foodStore;
const { foods } = storeToRefs(foodStore);
const selectedCity = ref<string>("");

const filteredFoods = computed(() => {
  if (!selectedCity.value) {
    return foods.value;
  }
  return foods.value.filter((food) => food.city === selectedCity.value);
});

const removeFood = async (uuid: string) => {
  try {
    await deleteFood(uuid);
    toast({
      title: "Food removed successfully",
      variant: "default",
    });
  } catch (error) {
    console.error("Error deleting food:", error);
  }
};
</script>
