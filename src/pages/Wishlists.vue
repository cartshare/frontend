<template>
	<main-layout>
		<shopping-list :list="itemList" :personal="false"></shopping-list>
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
		},
		created: function() {
			fetch("http://localhost:80/neighborList", {
				method: "GET",
				credentials: "include"
			})
				.then(response => response.json())
				.then(result => console.log(this.itemList = result.neighborRequests))
				.catch(error => alert(error));

		}
	}
</script>

<style scoped>

</style>