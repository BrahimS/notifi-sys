<script lang="ts" setup>
defineOptions({
	name: "Label",
});
defineProps<{ id: string; htmlFor: string; text: string }>();
</script>
<template>
	<label
		:id="id"
		:for="htmlFor"
		class="block text-sm font-medium text-gray-700 mb-1"
		>{{ text }}</label
	>
</template>
