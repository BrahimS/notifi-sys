<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Header",
});
</script>
<template>
	<header class="full-width text-gray-800 py-8 px-0">
		<div class="container mx-auto px-4">
			<div class="flex justify-between items-center">
				<slot></slot>
			</div>
		</div>
	</header>
</template>
