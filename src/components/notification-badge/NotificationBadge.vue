<script setup lang="ts">
import { computed, defineEmits, defineProps } from "vue";
import { useNotificationStore } from "../../stores/useNotificationStore";

const props = defineProps<{
	namespace?: string;
}>();

const emit = defineEmits<{
	"toggle-dropdown": [];
}>();

const notificationStore = useNotificationStore(props.namespace ?? "default");
const unreadCount = computed(() => notificationStore.getUnreadCount());

const toggleDropdown = () => {
	emit("toggle-dropdown");
};
</script>
<template>
	<div class="relative inline-block">
		<button
			class="py-2 px-3 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 focus:outline-none flex-row-reverse border-1"
			:aria-label="`${unreadCount}  notifications`"
			:aria-expanded="false"
			aria-haspopup="true"
			@click="toggleDropdown"
		>
			<span
				v-if="unreadCount > 0"
				class="absolute -top-4 -left-3 bg-red-500 text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center"
				aria-hidden="true"
			>
				{{ unreadCount > 99 ? "99+" : unreadCount }}
			</span>
			<span class="sr-only">View</span> Unread Notifications
			<span v-if="unreadCount > 0" class="sr-only">
				({{ unreadCount }} unread )
			</span>
		</button>
	</div>
</template>
