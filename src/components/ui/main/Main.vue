<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Main",
});
</script>
<template>
	<main class="min-h-screen bg-gray-100 p-8">
		<div class="max-w-7xl mx-auto">
			<slot></slot>
		</div>
	</main>
</template>
