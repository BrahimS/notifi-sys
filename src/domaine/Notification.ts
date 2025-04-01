export type NotificationType = "success" | "error" | "info";

export interface Notification {
	id: string;
	title: string;
	type: NotificationType;
	content: string;
	read: boolean;
	timestamp: number;
}

export interface NotificationState {
	notifications: Notification[];
}
