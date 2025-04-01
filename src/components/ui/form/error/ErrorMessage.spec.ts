import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ErrorMessage from "./ErrorMessage.vue";

describe("ErrorMessage", () => {
	it("render with text prop", () => {
		const wrapper = mount(ErrorMessage, {
			props: {
				message: "error Message",
			},
		});
		expect(wrapper.text()).toBe("error Message");
	});
});
