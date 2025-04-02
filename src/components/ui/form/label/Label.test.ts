import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Label from "./Label.vue";

describe("Label", () => {
	it("render with text prop", () => {
		const wrapper = mount(Label, {
			props: {
				text: "text label",
				id: "label-id",
				htmlFor: "input-id",
			},
		});
		expect(wrapper.text()).toBe("text label");
	});
});
