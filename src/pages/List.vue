<template>
	<main-layout>
		<h3>Your List</h3>
		<shopping-list :list="list" :personal="true"></shopping-list>
		<a href="/create">Create Item</a>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";
	import ShoppingList from "../components/ShoppingList";

	export default {
		name: "List",
		components: {MainLayout, ShoppingList},
		data: function () {
			return {list: []}
		},
		created: function () {
			fetch("http://localhost:80/list", {
				method: "GET",
				credentials: "include"
			})
				.then(response => response.json())
				.then(result => {
					console.log(result.items);
					this.list = result.items;
				})
				.catch(error => alert(error));
		}
	}
</script>

<style scoped>

</style>