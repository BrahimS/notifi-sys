import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Main from "./Main.vue";

describe("Main", () => {
	it("renders with slot", () => {
		const wrapper = mount(Main, {
			slots: {
				default: "Main Content",
			},
		});
		expect(wrapper.text()).toBe("Main Content");
	});

	it("render as main element", () => {
		const wrapper = mount(Main);
		expect(wrapper.element.tagName).toBe("MAIN");
	});
});
