<script setup lang="ts">
import { useNotificationStore } from "../../stores/useNotificationStore";
import type { Notification } from "../../domaine/Notification";
import Headline from "../ui/typography/Headlines.vue";
import IconWrapper from "../ui/icones/IconWrapper.vue";

defineOptions({
	name: "NotificationItem",
});

const props = defineProps<{
	notification: Notification;
	namespace?: string;
}>();

const notificationStore = useNotificationStore(props.namespace ?? "default");

const markAsRead = () => {
	notificationStore.markAsRead(props.notification.id);
};

const remove = () => {
	notificationStore.removeNotification(props.notification.id);
};
</script>

<template>
	<article
		:class="[
			'p-4 mb-3 rounded-lg border-l-6 shadow-sm transition-all',
			notification.read ? 'opacity-70' : 'opacity-100',
			notification.type === 'success'
				? 'border-green-500 bg-green-50'
				: notification.type === 'error'
					? 'border-red-500 bg-red-50'
					: 'border-blue-500 bg-blue-50',
		]"
		role="alert"
		:aria-label="`${notification.type} notification: ${notification.title}`"
	>
		<div class="flex justify-between items-start">
			<div>
				<Headline
					:class="[
						'font-semibold',
						notification.type === 'success'
							? 'text-green-700'
							: notification.type === 'error'
								? 'text-red-700'
								: 'text-blue-700',
					]"
					:level="3"
					:title="notification.title"
				>
				</Headline>
				<p class="text-gray-700 mt-1">{{ notification.content }}</p>
				<time class="text-xs text-gray-500 mt-2 block">
					{{ new Date(notification.timestamp).toLocaleString() }}
				</time>
			</div>
			<div class="flex space-x-2">
				<button
					v-if="!notification.read"
					class="text-gray-500 hover:text-gray-700"
					:aria-label="`Mark ${notification.title} as read`"
					@click="markAsRead"
					@keydown.enter="markAsRead"
				>
					<IconWrapper
						icon-path="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0
						011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					/>
				</button>
				<button
					class="text-gray-500 hover:text-gray-700"
					:aria-label="`Remove ${notification.title} notification`"
					@click="remove"
					@keydown.enter="remove"
				>
					<IconWrapper
						icon-path="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0
						111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10
						11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0
						010-1.414z"
					/>
				</button>
			</div>
		</div>
	</article>
</template>
