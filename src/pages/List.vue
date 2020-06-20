<template>
	<main-layout>
		<h3>Your List</h3>
		<shopping-list :list="list"></shopping-list>
		<a href="/create">Create Shopping Item</a>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";
	import ShoppingList from "../components/ShoppingList";

	export default {
		name: "List",
		components: {MainLayout, ShoppingList},
		data: function () {
			return {list: [{desc: "Item 1", qty: 3, onWishlist: true}]}
		}
	}
</script>

<style scoped>

</style>