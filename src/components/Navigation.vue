<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid" id="">
			<a class="navbar-brand" href="/"><img src="../assets/logo.png" width="32px" height="32px" alt="" class="d-inline-block align-top"/>CartShare</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					<template v-for="nav in navList">
						<li v-if="nav.show" :key="nav.url" class="nav-item">
							<a :href="nav.url" :title="nav.name" class="nav-link">{{nav.name}}</a>
						</li>
					</template>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "Navigation",
		computed: {
			navList: function () {
				return [
					{url: "/", name: "Home", show: true},
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