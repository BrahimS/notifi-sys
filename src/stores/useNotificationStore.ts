import { reactive, watchEffect } from "vue";
import type {
	Notification,
	NotificationState,
	NotificationType,
} from "../domaine/Notification";

const notificationStores: Record<string, NotificationState> = {};

export function useNotificationStore(namespace: string = "default") {
	// Initialize store if it doesn't exist
	if (!notificationStores[namespace]) {
		// Try to load from localStorage
		const storedData = localStorage.getItem(`notifications_${namespace}`);
		notificationStores[namespace] = reactive({
			notifications: storedData ? JSON.parse(storedData) : [],
		});

		// Set up persistence
		watchEffect(() => {
			localStorage.setItem(
				`notifications_${namespace}`,
				JSON.stringify(notificationStores[namespace].notifications)
			);
		});
	}

	const store = notificationStores[namespace];

	const addNotification = (
		title: string,
		type: NotificationType,
		content: string
	) => {
		const notification: Notification = {
			id: Date.now().toString(),
			title,
			type,
			content,
			read: false,
			timestamp: Date.now(),
		};

		store.notifications.unshift(notification);

		// Dispatch custom event for cross-component sync
		window.dispatchEvent(
			new CustomEvent("notification-added", {
				detail: { namespace, notification },
			})
		);
	};

	const removeNotification = (id: string) => {
		const index = store.notifications.findIndex(n => n.id === id);
		if (index !== -1) {
			store.notifications.splice(index, 1);

			// Dispatch custom event for cross-component sync
			window.dispatchEvent(
				new CustomEvent("notification-removed", {
					detail: { namespace, id },
				})
			);
		}
	};

	const markAsRead = (id: string) => {
		const notification = store.notifications.find(n => n.id === id);
		if (notification) {
			notification.read = true;

			// Dispatch custom event for cross-component sync
			window.dispatchEvent(
				new CustomEvent("notification-read", {
					detail: { namespace, id },
				})
			);
		}
	};

	const getUnreadCount = () => {
		return store.notifications.filter(n => !n.read).length;
	};

	return {
		notifications: store.notifications,
		addNotification,
		removeNotification,
		markAsRead,
		getUnreadCount,
	};
}
