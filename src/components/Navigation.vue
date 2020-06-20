<template>
	<ul class="navigation">
		<template v-for="nav in navList">
			<li v-if="nav.show" :key="nav.url">
				<a :href="nav.url" :title="nav.name">{{nav.name}}</a>
			</li>
		</template>
	</ul>
</template>

<script>
	export default {
		name: "Navigation",
		data: function () {
			return {
				navList: [
					{url: "/home", name: "Home", show: true},
					{url: "/signup", name: "Sign Up", show: !this.signedIn},
					{url: "/login", name: "Log In", show: !this.signedIn},
					{url: "/logout", name: "Sign Out", show: this.signedIn},
					{url: "/list", name: "My List", show: this.signedIn},
					{url: "/wishlists", name: "Neighbors' Wishlists", show: this.signedIn}
				]
			}
		},
		props: {signedIn: Boolean}
	}
</script>

<style scoped>

</style>