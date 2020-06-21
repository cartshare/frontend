<template>
	<main-layout>
		<div class="error" v-if="err">{{err}}</div>
		<div v-else>Logging Out...</div>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";

	export default {
		name: "Logout",
		components: {MainLayout},
		data: function () {
			return {err: null}
		},
		created: function () {
			fetch("http://localhost:80/logout", {
				method: "GET",
				credentials: "include"
			})
				.then(response => {
					if (response.status === 200)
						window.location.href = "/";
				})
				.catch(error => this.err = error);
		}
	}
</script>

<style scoped>

</style>