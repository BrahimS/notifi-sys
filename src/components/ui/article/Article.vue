<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Article",
});
</script>
<template>
	<article class="bg-white rounded-lg shadow-lg p-6">
		<slot></slot>
	</article>
</template>
