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
					{url: "/list", name: "My List", show: this.signedIn},
					{url: "/wishlists", name: "Neighbors' Wishlists", show: this.signedIn},
					{url: "/signup", name: "Sign Up", show: !this.signedIn},
					{url: "/login", name: "Log In", show: !this.signedIn},
					{url: "/logout", name: "Sign Out", show: this.signedIn},
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

	#logo {
		display: grid;
		grid-auto-flow: column;
		align-items: center;
		gap: 0.3em;
		
		font-weight: bold;
		--text-shadow: rgba(0, 0, 0, 0.2);
		text-shadow: 0.02em 0.02em 0.1em var(--text-shadow);
		font-size: 1.75rem;
		transform-origin: left top;

		animation: LogoIntro 1 2s;
	}
	#logo:before {
		display: inline-grid;
		animation: Oscillate 3s infinite;
	}
	@keyframes LogoIntro {
		from, 70% {
			background-color: var(--primary-color);
			box-shadow: 0 0 0 50vw var(--primary-color);
			font-size: 2.8rem;
			transform: translate(-50%, -50%) translate(50vw, 50vh);
			z-index: 1;
		}
		from {
			color: rgba(255, 255, 255, 0.02);
			text-shadow: 0 0 transparent;
		}
		20% {
			color: unset;
			text-shadow: 0 0 transparent;
		}
		to {
			box-shadow: 0 0 0 100vw transparent;
		}
	}
	@keyframes Oscillate {
		from, to { transform: translateY(0.02em); }
		50% { transform: translateY(-0.02em); }
	}
</style>