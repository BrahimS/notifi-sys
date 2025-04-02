<script lang="ts">
import { defineComponent } from "vue";
import NotificationsWidget from "./components/notification-widget/NotificationsWidget.vue";
import Article from "./components/ui/article/Article.vue";
import Header from "./components/ui/header/Header.vue";
import Section from "./components/ui/section/Section.vue";
import Main from "./components/ui/main/Main.vue";

export default defineComponent({
	name: "App",
	components: {
		NotificationsWidget,
		Header,
		Article,
		Section,
		Main,
	},
});
</script>
<template>
	<Main>
		<div class="max-w-7xl mx-auto">
			<Header>
				<h1 class="text-3xl font-semibold">Notification management system</h1>
			</Header>
			<Section>
				<Article>
					<notifications-widget namespace="Instance 1" />
				</Article>

				<Article>
					<notifications-widget namespace="Instance 2" />
				</Article>
			</Section>
		</div>
	</Main>
</template>
