<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Section",
});
</script>
<template>
	<section
		class="grid grid-cols-1 md:grid-cols-2 gap-8"
		aria-label="Notification instances"
	>
		<slot></slot>
	</section>
</template>
