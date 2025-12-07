import { defineStore } from "pinia";
import type { AddFoodPayload, Food } from "~/models/Food";
import { useLocalStorage } from "#imports";

export const useFoodStore = defineStore(
  "food",
  () => {
    const foods = useLocalStorage<Food[]>("foods", []);

    const cities = computed(() => {
      const citySet = new Set(foods.value.map((food) => food.city));
      return Array.from(citySet);
    });

    const isDuplicateFood = (newFood: AddFoodPayload): boolean => {
      return foods.value.some((food) => {
        return (
          food.foodName.toLowerCase() === newFood.foodName.toLowerCase() &&
          food.restaurantName.toLowerCase() ===
            newFood.restaurantName.toLowerCase() &&
          food.city.toLowerCase() === newFood.city.toLowerCase()
        );
      });
    };

    async function addFood(foodData: AddFoodPayload) {
      if (isDuplicateFood(foodData)) {
        throw new Error("This food has already been logged.");
      }
      const uuid = crypto.randomUUID();
      const date = new Date().toISOString();
      console.log({ foodData, uuid, date });

      foods.value.push({
        ...foodData,
        uuid,
        date,
      });
    }

    async function deleteFood(uuid: string) {
      foods.value = foods.value.filter((food) => food.uuid !== uuid);
    }

    async function editFood(editedFood: Food) {
      const index = foods.value.findIndex(
        (food) => food.uuid === editedFood.uuid,
      );

      if (index === -1) return;

      foods.value[index] = editedFood;
    }

    async function getFoodById(uuid: string): Promise<Food | undefined> {
      return foods.value.find((food) => food.uuid === uuid);
    }

    return { addFood, deleteFood, editFood, getFoodById, cities, foods };
  },
  {
    persist: true,
  },
);
