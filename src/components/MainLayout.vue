<template>
	<div class="container">
		<navigation :signed-in="signedIn"></navigation>
		<slot></slot>
	</div>
</template>

<script>
	import Navigation from "./Navigation";

	export default {
		name: "MainLayout",
		components: {
			Navigation
		},
		created: function () {
			fetch("http://localhost:80/session", {
				method: "GET",
				credentials: "include"
			})
				.then(response => {
					this.signedIn = response.status === 200;
					console.log(response.status);
				})
				.catch(error => alert(error));
		},
		data: function () {
			return {signedIn: false}
		}
	}
</script>

<style scoped>

</style>