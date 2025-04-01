import { config } from "@vue/test-utils";
import { vi } from "vitest";

// Define Storage interface for TypeScript
interface Storage {
	getItem(key: string): string | null;
	setItem(key: string, value: string): void;
	clear(): void;
	removeItem(key: string): void;
	length: number;
	key(index: number): string | null;
}

// Mock localStorage
const localStorageMock: Storage = {
	getItem: vi.fn(),
	setItem: vi.fn(),
	clear: vi.fn(),
	removeItem: vi.fn(),
	length: 0,
	key: vi.fn(),
};
global.localStorage = localStorageMock;

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: vi.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

// Configure Vue Test Utils
config.global.mocks = {
	// Add any global mocks here
};
