<template>
	<main-layout>
		<form @submit.prevent="send">
			<label>
				<span>
					<svg class="bi bi-person-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
						<path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
						<path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
					</svg>
					Email
				</span>
				<input id="email" name="email" type="email" placeholder="Email" required/>
			</label>
			<label>
				<span>
					<svg class="bi bi-lock-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<rect width="11" height="9" x="2.5" y="7" rx="2"/>
						<path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
					</svg>
					Password
				</span>
				<input id="password" name="password" type="password" placeholder="Password" required/>
			</label>
			<div class="error" v-if="err">{{err}}</div>
			<input type="submit"/>
		</form>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";

	export default {
		name: "Login",
		components: {MainLayout},
		data() {
			return {err: null}
		},
		methods: {
			send(e) {
				const formData = {};
				new FormData(e.target).forEach((value, key) => {
					formData[key] = value
				});
				const json = JSON.stringify(formData);

				fetch("http://localhost:80/login", {
					method: "POST",
					credentials: "include",
					body: json
				})
					.then(response => response.json())
					.then(result => {
						if (!result.error)
							window.location.href = "/";
						this.err = result.error;
					})
					.catch(console.error);
			}
		}
	}
</script>

<style scoped>

</style>