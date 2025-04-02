import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "./Header.vue";

describe("Header", () => {
	it("renders with slot", () => {
		const wrapper = mount(Header, {
			slots: {
				default: "Header Content",
			},
		});
		expect(wrapper.text()).toBe("Header Content");
	});

	it("render as header element", () => {
		const wrapper = mount(Header);
		expect(wrapper.element.tagName).toBe("HEADER");
	});
});
