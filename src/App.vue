<template>
	<div id="app">
		<navigation :signed-in="signedIn"></navigation>
		Your Wishlist:
		<shopping-list :list="list"></shopping-list>
	</div>
</template>

<script>
	import ShoppingList from "./components/ShoppingList";
	import Navigation from "./components/Navigation";

	export default {
		name: 'App',
		components: {
			ShoppingList,
			Navigation
		},
		data: function () {
			return {
				list: [
					{desc: "Apple", qty: 8, onWishlist: true},
					{desc: "Target Frosted Wheats Cereal", qty: 2, onWishlist: true},
				],
				signedIn: false
			};
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
