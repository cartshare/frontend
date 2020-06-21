<template>
	<main-layout>
		<h2>What's on <b>your</b> list today?</h2>
		<div class="notification" v-for="notif in notifications" :key="notif.id" :id="notif.id">
			<h4>{{notif.title}}</h4>
			<p>{{notif.body}}</p>
			<button @click="deleteNotif(notif.id)">Delete Notification</button>
		</div>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";

	export default {
		name: "Home",
		components: {MainLayout},
		data: function () {
			return {
				notifications: []
			}
		},
		methods: {
			deleteNotif: function (id) {
				const body = {notificationId: id};
				const json = JSON.stringify(body);

				fetch("http://localhost:80/deleteNotifications", {
					method: "POST",
					credentials: "include",
					body: json
				})
					.then(() => window.location.reload());
			}
		},
		created: function () {
			fetch("http://localhost:80/notifications", {
				method: "POST",
				credentials: "include"
			})
				.then(response => response.json())
				.then(result => this.notifications = result.notifications)
				.catch(error => alert(error));
		}
	}
</script>

<style scoped>
.notification {
	border: 2px solid black;
	border-radius: 3px;
	background: white;
	padding: 10px;
}
</style>