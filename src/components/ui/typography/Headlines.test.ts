import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Headlines from "./Headlines.vue";

describe("Headline", () => {
	it("render with default props", () => {
		const wrapper = mount(Headlines, {
			props: {
				title: "Hello World",
			},
		});
		expect(wrapper.text()).toBe("Hello World");
		expect(wrapper.element.tagName).toBe("H1");
	});
	it("render with level 2", () => {
		const wrapper = mount(Headlines, {
			props: {
				title: "Hello World",
				level: 2,
			},
		});
		expect(wrapper.element.tagName).toBe("H2");
	});
	it("applies custom id", () => {
		const wrapper = mount(Headlines, {
			props: {
				title: "Hello World",
				id: "this-is-an-id",
			},
		});
		expect(wrapper.element.id).toBe("this-is-an-id");
	});
	it("applies custom class", () => {
		const wrapper = mount(Headlines, {
			props: {
				title: "Hello World",
				class: "this-is-a-class",
			},
		});
		expect(wrapper.element.classList.contains("this-is-a-class")).toBe(true);
	});
});
