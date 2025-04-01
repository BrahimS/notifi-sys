<script setup lang="ts">
import { computed, defineEmits, defineProps, withDefaults } from "vue";
import { cn } from "../../../lib/utils"; // Adjusted the path to match the correct location

interface Props {
	modelValue?: string | number;
	type?: "text" | "password" | "email" | "number" | "tel" | "url";
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	class?: string;
	id?: string;
	name?: string;
	"aria-label"?: string;
	"aria-describedby"?: string;
	"aria-invalid"?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	type: "text",
	required: false,
	disabled: false,
	"aria-invalid": false,
});

const emit = defineEmits<{
	(e: "update:modelValue", value: string): void;
}>();

const classes = computed(() =>
	cn(
		"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
		"disabled:cursor-not-allowed disabled:opacity-50",
		props.class
	)
);

// eslint-disable-next-line no-undef
const handleInput = (event: Event) => {
	// eslint-disable-next-line no-undef
	const target = event.target as HTMLInputElement;
	emit("update:modelValue", target.value);
};
</script>

<template>
	<input
		:id="id"
		:type="type"
		:value="modelValue"
		:placeholder="placeholder"
		:required="required"
		:disabled="disabled"
		:class="classes"
		:name="name"
		:aria-label="$attrs['aria-label']"
		:aria-describedby="$attrs['aria-describedby']"
		:aria-invalid="$attrs['aria-invalid']"
		v-bind="$attrs"
		@input="handleInput"
	/>
</template>
