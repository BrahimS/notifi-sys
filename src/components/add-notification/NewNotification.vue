<script setup lang="ts">
import { ref } from "vue";
import type { NotificationType } from "../../domaine/Notification";
import Headline from "../ui/typography/Headlines.vue";
import ErrorMessage from "../ui/form/error/ErrorMessage.vue";
import Modal from "../ui/modal/Modal.vue";
import LabelWrapper from "../ui/form/label/Label.vue";
import { useNotificationStore } from "../../stores/useNotificationStore";

const props = defineProps<{
	namespace?: string;
}>();

const notificationStore = useNotificationStore(props.namespace ?? "default");
const title = ref("");
const type = ref<NotificationType>("info");
const content = ref("");
const showModal = ref(false);

const submit = () => {
	if (title.value && content.value) {
		notificationStore.addNotification(title.value, type.value, content.value);
		showModal.value = false;

		// Reset form
		title.value = "";
		type.value = "info";
		content.value = "";
	}
};
</script>

<template>
	<div class="flex justify-end">
		<button
			class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			aria-label="Create new notification"
			@click="showModal = true"
		>
			Add Notification
		</button>

		<Modal v-model="showModal">
			<form
				class="bg-white rounded-lg"
				aria-labelledby="form-title"
				@submit.prevent="submit"
			>
				<Headline
					id="form-title"
					class="mb-4"
					:level="3"
					title="Create New Notification"
				/>

				<div class="mb-4" role="group" aria-labelledby="title-label">
					<LabelWrapper
						id="title-label"
						class="block text-sm font-medium text-gray-700 mb-1"
						:html-for="title"
						text="Notification Title"
					/>

					<input
						id="title"
						v-model="title"
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						type="text"
						required
						aria-required="true"
						aria-invalid="false"
						:aria-describedby="title ? '' : 'title-error'"
					/>

					<ErrorMessage
						v-if="!title"
						message="Please enter a notification title"
					/>
				</div>

				<div class="mb-4" role="group" aria-labelledby="type-label">
					<LabelWrapper
						id="type-label"
						class="block text-sm font-medium text-gray-700 mb-1"
						:html-for="type"
						text="Notification Type"
					/>

					<select
						id="type"
						v-model="type"
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						aria-required="true"
					>
						<option value="success">Success</option>
						<option value="error">Error</option>
						<option value="info">Info</option>
					</select>
				</div>

				<div class="mb-4" role="group" aria-labelledby="content-label">
					<LabelWrapper
						id="content-label"
						:html-for="content"
						text="Notification Description"
						class="block text-sm font-medium text-gray-700 mb-1"
					/>
					<textarea
						id="content"
						v-model="content"
						rows="3"
						class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						required
						aria-required="true"
						aria-invalid="false"
						:aria-describedby="content ? '' : 'content-error'"
					/>
					<ErrorMessage
						v-if="!content"
						message="Please enter a notification description"
					/>
				</div>

				<div
					class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
				>
					<button
						class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
						aria-label="Create new notification"
						type="submit"
					>
						Create
					</button>
					<button
						class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
						type="button"
						@click="showModal = false"
					>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	</div>
</template>
