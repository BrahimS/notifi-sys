<script setup lang="ts">
defineOptions({
	name: "icon-wrapper",
});
defineProps<{ iconPath: string }>();
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5"
		viewBox="0 0 20 20"
		fill="currentColor"
		aria-hidden="true"
	>
		<path fill-rule="evenodd" :d="iconPath" clip-rule="evenodd" />
	</svg>
</template>
