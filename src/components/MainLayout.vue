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
		props: {signedIn: Boolean}
	}
</script>

<style scoped>

</style>