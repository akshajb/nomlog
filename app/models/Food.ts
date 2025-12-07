import { object, string } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export interface AddFoodPayload {
  foodName: string;
  restaurantName: string;
  city: string;
}

export interface Food extends AddFoodPayload {
  uuid: string;
  date: string;
}

export const AddFoodValidationSchema = toTypedSchema(
  object({
    restaurantName: string().min(1, "Restaurant Name is required"),
    foodName: string().min(1, "Food Name is required"),
    city: string().min(1, "City is required"),
  }),
);
