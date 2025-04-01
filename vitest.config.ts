import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./vitest.setup.ts"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: [
				"node_modules/",
				"src/main.ts",
				"src/**/*.d.ts",
				"src/**/*.stories.{js,ts}",
				"src/**/*.config.{js,ts}",
				"e2e/**/*",
			],
		},
	},
});
