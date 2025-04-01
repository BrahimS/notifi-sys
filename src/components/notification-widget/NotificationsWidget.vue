<script setup lang="ts">
import { defineOptions, ref } from "vue";
import NotificationBadge from "../notification-badge/NotificationBadge.vue";
import NotificationList from "../notification-list/NotificationList.vue";
import NewNotification from "../add-notification/NewNotification.vue";
import Headline from "../ui/typography/Headlines.vue";

defineOptions({
	name: "NotificationsWidget",
});

defineProps<{
	namespace?: string;
}>();

const showDropdown = ref(true);

const toggleNotifications = () => {
	showDropdown.value = !showDropdown.value;
};
</script>
<template>
	<section class="notifications-widget" aria-labelledby="notifications-heading">
		<div class="grid grid-cols-[1fr_auto] items-center mb-4 gap-4">
			<Headline id="notifications-heading" title="Notifications" :level="2">
				<span class="font-normal text-gray-700 text-md" aria-label="Namespace">
					: {{ namespace }}
				</span>
			</Headline>
			<notification-badge
				:namespace="namespace"
				:is-visible="showDropdown"
				aria-controls="notifications-content"
				:aria-expanded="showDropdown"
				@toggle-dropdown="toggleNotifications"
			/>
		</div>

		<div
			v-if="showDropdown"
			id="notifications-content"
			class="mb-6"
			aria-live="polite"
		>
			<section>
				<notification-list :namespace="namespace" />
			</section>
		</div>

		<new-notification
			:namespace="namespace"
			aria-label="Create new notification"
		/>
	</section>
</template>
