import { mountSuspended } from "@nuxt/test-utils/runtime";

import { describe, it, expect } from "vitest";

import AddFood from "@/pages/add-food.vue";

describe("AddFood Page", () => {
  it("renders correctly", async () => {
    const component = await mountSuspended(AddFood);

    expect(component.exists()).toBe(true);
  });

  it("renders Add Food Form", async () => {
    const component = await mountSuspended(AddFood);

    expect(component.get("form[data-test-id='add-food-form']")).toBeDefined();
  });
});
