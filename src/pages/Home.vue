<template>
	<main-layout>
		<h2>What's on <b>your</b> list today?</h2>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";

	export default {
		name: "Home",
		components: {MainLayout},
		data: function () {
			return {loggedIn: false}
		}
	}
</script>

<style scoped>

</style>