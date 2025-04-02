import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "./Card.vue";

describe("Card", () => {
	it("renders with slot", () => {
		const wrapper = mount(Card, {
			slots: {
				default: "Card Content",
			},
		});
		expect(wrapper.text()).toBe("Card Content");
	});

	it("render as card element", () => {
		const wrapper = mount(Card);
		expect(wrapper.element.tagName).toBe("ARTICLE");
	});
});
