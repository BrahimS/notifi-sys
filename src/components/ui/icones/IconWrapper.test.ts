import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import IconWrapper from "./IconWrapper.vue";

describe("IconWrapper", () => {
	it("renders with icon path", () => {
		const wrapper = mount(IconWrapper, {
			props: {
				iconPath: "M10 10h5v5h-5z",
			},
		});
		const path = wrapper.find("path");
		expect(path.attributes("d")).toBe("M10 10h5v5h-5z");
	});
	it("has the correct SVG attribute", () => {
		const wrapper = mount(IconWrapper, {
			props: {
				iconPath: "M10 10h5v5h-5z",
			},
		});
		const svg = wrapper.find("svg");
		expect(svg.attributes("xmlns")).toBe("http://www.w3.org/2000/svg");
		expect(svg.attributes("viewBox")).toBe("0 0 20 20");
		expect(svg.attributes("fill")).toBe("currentColor");
		expect(svg.attributes("aria-hidden")).toBe("true");
		expect(svg.attributes("class")).toBe("h-5 w-5");
	});
});
