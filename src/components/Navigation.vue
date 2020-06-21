<template>
	<nav>
		<a id="logo" href="/"><img src="../assets/logo.png" alt="" width="32px" height="32px"/> CartShare</a>
		<ul class="navbar">
			<template v-for="nav in navList">
				<li v-if="nav.show" :key="nav.url" class="nav-item">
					<a :href="nav.url" @click="nav.onClick" :title="nav.name" class="nav-link">{{nav.name}}</a>
				</li>
			</template>
		</ul>
		<login-signup-form/>
	</nav>
</template>

<script>
	import LoginSignupForm from './LoginSignupForm';

	export default {
		name: "Navigation",
		components: {LoginSignupForm},
		computed: {
			navList: function () {
				return [
					{url: "/signup", name: "Sign Up", show: !this.signedIn},
					{url: "/login", name: "Log In", show: !this.signedIn},
					{url: "/logout", name: "Sign Out", show: this.signedIn},
					{url: "/list", name: "My List", show: this.signedIn},
					{url: "/wishlists", name: "Neighbors' Wishlists", show: this.signedIn}
				];
			}
		},
		props: {signedIn: Boolean}
	};
</script>

<style scoped>
	nav,
	.navbar {
		display: flex;
		align-items: center;
		list-style-type: none;
	}

	nav {
		backdrop-filter: blur(1em);
		background-color: hsl(90, 50%, 90%);
	}

	nav > *,
	.navbar > * {
		padding: 0.5em;
	}

	#logo {
		font-size: 1.65em;
		margin-right: auto;
	}
</style>