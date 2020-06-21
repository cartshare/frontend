<template>
	<div>
		<navigation :signed-in="signedIn"></navigation>
		<main>
			<slot></slot>
		</main>
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
	main {
		padding: 1rem;
	}
	main > * + * {
		margin-top: 1em;
	}
</style>