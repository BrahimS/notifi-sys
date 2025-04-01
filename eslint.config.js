import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default [
	eslint.configs.recommended,
	{
		files: ["**/*.{js,jsx,ts,tsx,vue}"],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				ecmaVersion: "latest",
				parser: tseslintParser,
				sourceType: "module",
			},
			globals: {
				// Browser globals
				window: "readonly",
				document: "readonly",
				localStorage: "readonly",
				CustomEvent: "readonly",
				// ES2021 globals
				Promise: "readonly",
				Map: "readonly",
				Set: "readonly",
				WeakMap: "readonly",
				WeakSet: "readonly",
				Proxy: "readonly",
				Reflect: "readonly",
				JSON: "readonly",
				Math: "readonly",
				Date: "readonly",
				RegExp: "readonly",
				Error: "readonly",
				Array: "readonly",
				Object: "readonly",
				String: "readonly",
				Number: "readonly",
				Symbol: "readonly",
				Function: "readonly",
				// Vitest globals
				vi: "readonly",
				describe: "readonly",
				it: "readonly",
				expect: "readonly",
				beforeEach: "readonly",
				afterEach: "readonly",
				beforeAll: "readonly",
				afterAll: "readonly",
				global: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
			vue: vuePlugin,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...vuePlugin.configs["vue3-recommended"].rules,
			"vue/multi-word-component-names": "off",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_" },
			],
		},
	},
];
