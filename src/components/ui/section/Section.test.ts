import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Section from "./Section.vue";

describe("Section", () => {
	it("renders with slot", () => {
		const wrapper = mount(Section, {
			slots: {
				default: "Section Content",
			},
		});
		expect(wrapper.text()).toBe("Section Content");
	});

	it("render as section element", () => {
		const wrapper = mount(Section);
		expect(wrapper.element.tagName).toBe("SECTION");
	});
});
