export default {
	preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
	transform: {
		"^.+\\.vue$": "@vue/vue3-jest",
		"^.+\\.(ts|tsx)$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	testMatch: [
		"**/tests/**/*.spec.[jt]s?(x)",
		"**/__tests__/*.spec.[jt]s?(x)",
		"**/src/**/*.spec.[jt]s?(x)",
	],
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.{js,vue,ts}",
		"!src/main.ts",
		"!src/**/*.d.ts",
		"!src/**/*.stories.{js,ts}",
		"!src/**/*.config.{js,ts}",
	],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov", "html"],
	setupFiles: ["<rootDir>/jest.setup.js"],
};
