import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Article from "./Article.vue";

describe("Article", () => {
	it("renders with slot", () => {
		const wrapper = mount(Article, {
			slots: {
				default: "Article Content",
			},
		});
		expect(wrapper.text()).toBe("Article Content");
	});

	it("render as article element", () => {
		const wrapper = mount(Article);
		expect(wrapper.element.tagName).toBe("ARTICLE");
	});
});
