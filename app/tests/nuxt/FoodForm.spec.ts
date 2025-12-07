import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";

import FoodForm from "@/components/forms/FoodForm.vue";

describe("Add Food Form", () => {
  it("renders correctly", () => {
    const wrapper = mount(FoodForm);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders the form with correct fields", () => {
    const wrapper = mount(FoodForm);
    expect(wrapper.findAll("input").length).toBe(3);

    const submitButton = wrapper.find("button");
    expect(submitButton.exists()).toBeTruthy();
    expect(submitButton.text()).toContain("Add");
  });

  it("should display error messages when form is submitted with empty values", async () => {
    const wrapper = mount(FoodForm);
    const form = wrapper.find('[data-test-id="add-food-form"]');

    await form.trigger("submit.prevent");

    await vi.waitFor(() => {
      const errors = wrapper.findAll(".error-message");
      expect(errors.length).toBe(3);
      expect(wrapper.emitted("submit")).toBeUndefined();
    });
  });

  it("should display error messages when form is submitted with empty values", async () => {
    const wrapper = mount(FoodForm);
    const form = wrapper.find('[data-test-id="add-food-form"]');
    const restaurantNameInput = wrapper.find("input#restaurant-name");
    const foodNameInput = wrapper.find("input#food-name");
    const city = wrapper.find("input#city");

    await restaurantNameInput.setValue("Test Restaurant");
    await foodNameInput.setValue("Test Food");
    await city.setValue("Test City");
    await form.trigger("submit.prevent");

    await vi.waitFor(() => {
      expect(wrapper.emitted("submit")).toBeDefined();
    });
  });
});
