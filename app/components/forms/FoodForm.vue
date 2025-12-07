<template>
  <form data-test-id="add-food-form" novalidate @submit.prevent="onSubmit">
    <Card>
      <CardHeader>
        <CardTitle>Add Food</CardTitle>
        <CardDescription>Add the food that you relished</CardDescription>
      </CardHeader>

      <CardContent>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel for="restaurant-name" class="font-bold">
                <Utensils class="size-5 fill-chart-1" />
                Restaurant Name
              </FieldLabel>
              <Input
                id="restaurant-name"
                v-model="restaurantName"
                placeholder="Pastaioli"
                required
                type="text"
                :value="restaurantName"
                v-bind="restaurantNameAttributes"
              />
              <span
                v-if="errors.restaurantName"
                class="error-message text-xs text-chart-2 font-semibold"
              >
                {{ errors.restaurantName }}
              </span>
            </Field>
            <Field>
              <FieldLabel for="food-name" class="font-bold">
                <Pizza class="size-5 fill-chart-3" />
                What did I like eating here ?
              </FieldLabel>
              <Input
                id="food-name"
                v-model="foodName"
                placeholder="Pesto Pasta"
                required
                type="text"
                v-bind="foodNameAttributes"
                :value="foodName"
              />
              <span
                v-if="errors.foodName"
                class="error-message text-xs text-chart-2 font-semibold"
              >
                {{ errors.foodName }}
              </span>
            </Field>
            <Field>
              <FieldLabel for="city" class="font-bold">
                <MapPin class="size-5 fill-chart-2" />
                City
              </FieldLabel>
              <Input
                id="city"
                v-model="city"
                placeholder="San Francisco"
                required
                type="text"
                v-bind="cityAttributes"
                :value="city"
              />
              <span
                v-if="errors.city"
                class="error-message text-xs text-chart-2 font-semibold"
              >
                {{ errors.city }}
              </span>
            </Field>
          </FieldGroup>
        </FieldSet>
      </CardContent>
      <CardFooter>
        <Button type="submit" class="add-food-submit w-full">{{
          submitLabel
        }}</Button>
      </CardFooter>
    </Card>
  </form>
</template>
<script setup lang="ts">
import { Field, FieldLabel, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Utensils, MapPin, Pizza } from "lucide-vue-next";
import { useForm } from "vee-validate";

import {
  AddFoodValidationSchema,
  type AddFoodPayload,
  type Food,
} from "@/models/Food";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const emit = defineEmits<{
  submit: [AddFoodPayload];
}>();

const props = defineProps<{
  food?: Food;
}>();

const initialValues = computed(() => {
  return {
    restaurantName: props.food?.restaurantName || "",
    foodName: props.food?.foodName || "",
    city: props.food?.city || "",
  };
});

const submitLabel = computed(() => {
  return props.food ? "Edit Food" : "Add Food";
});

const { handleSubmit, defineField, errors } = useForm<AddFoodPayload>({
  validationSchema: AddFoodValidationSchema,
  initialValues: initialValues.value,
});

const [restaurantName, restaurantNameAttributes] =
  defineField("restaurantName");
const [foodName, foodNameAttributes] = defineField("foodName");
const [city, cityAttributes] = defineField("city");

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>
