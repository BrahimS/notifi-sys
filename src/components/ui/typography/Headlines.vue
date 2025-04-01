<script setup lang="ts">
import { computed, defineProps } from "vue";

defineOptions({
	name: "headlines",
});
const props = defineProps<{
	title: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	id?: string;
	className?: string;
}>();
const level = props.level ?? 1;

const size = computed(() => {
	const sizeMap: Record<number, number> = {
		1: 3,
		2: 2,
		3: 1.5,
		4: 1.25,
		5: 1.125,
		6: 1,
	};
	return sizeMap[level] ?? 0;
});
</script>
<template>
	<component
		:is="`h${level}`"
		:id="props.id"
		:class="[`text-${size}xl font-bold`, props.className]"
	>
		{{ props.title }}
		<slot />
	</component>
</template>
