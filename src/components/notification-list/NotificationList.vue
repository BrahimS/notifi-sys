<script setup lang="ts">
import { computed, defineOptions, defineProps } from "vue";
import { useNotificationStore } from "../../stores/useNotificationStore";
import NotificationItem from "../notification-item/NotificationItem.vue";
import Headline from "../ui/typography/Headlines.vue";

defineOptions({
	name: "NotificationList",
});

const props = defineProps<{
	namespace?: string;
}>();

const notificationStore = useNotificationStore(props.namespace ?? "default");
const notifications = computed(() => notificationStore.notifications);
</script>

<template>
	<section
		aria-label="Notifications"
		class="bg-white rounded-lg p-4 max-h-160 overflow-y-auto"
	>
		<Headline class="sr-only" :level="2" title="Notifications" />
		<div
			v-if="notifications.length === 0"
			class="text-center py-6 text-gray-500"
			role="status"
			aria-live="polite"
		>
			No notifications
		</div>
		<ul v-else role="list" class="list-none p-0 m-0">
			<notification-item
				v-for="notification in notifications"
				:key="notification.id"
				:notification="notification"
				:namespace="namespace"
			/>
		</ul>
	</section>
</template>
