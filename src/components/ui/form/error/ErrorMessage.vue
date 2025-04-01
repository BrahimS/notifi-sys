<script setup lang="ts">
defineOptions({
	name: "ErrorMessage",
});
defineProps<{ message: string }>();
</script>
<template>
	<span id="content-error" class="text-sm text-red-600" role="alert">
		{{ message }}
	</span>
</template>
