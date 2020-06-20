<template>
	<main-layout>
		<shopping-list></shopping-list>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";
	import ShoppingList from "../components/ShoppingList";

	export default {
		name: "Wishlists",
		components: {ShoppingList, MainLayout}
	}
</script>

<style scoped>

</style>