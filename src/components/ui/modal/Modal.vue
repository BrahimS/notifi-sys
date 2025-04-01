<script setup lang="ts">
defineOptions({
	name: "Modal",
});

defineProps<{
	modelValue: boolean;
}>();

defineEmits<{
	(e: "update:modelValue", value: boolean): void;
}>();
</script>
<template>
	<Teleport to="body">
		<Transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-200 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0"
		>
			<div v-if="modelValue" class="fixed inset-0 z-50 overflow-y-auto">
				<div
					class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
				>
					<div class="fixed inset-0 transition-opacity" aria-hidden="true">
						<div class="absolute inset-0 bg-gray-500 opacity-75" />
					</div>

					<span
						class="hidden sm:inline-block sm:h-screen sm:align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>

					<div
						class="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-headline"
					>
						<slot />
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>
