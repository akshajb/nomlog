import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("renders correctly", async () => {
    const component = await mountSuspended(MainNav);

    expect(component.html()).toContain("Nom Log");
  });

  it("has navigation links", async () => {
    const component = await mountSuspended(MainNav);

    const links = component.findAll("a").map((link) => link.attributes("href"));

    expect(links).toContain("/");
    expect(links).toContain("/add-food");
  });
});
