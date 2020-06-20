<template>
	<main-layout>
		<shopping-list :list="itemList"></shopping-list>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";
	import ShoppingList from "../components/ShoppingList";

	export default {
		name: "Wishlists",
		components: {ShoppingList, MainLayout},
		data: function () {
			return {itemList: []}
		}
	}
</script>

<style scoped>

</style>