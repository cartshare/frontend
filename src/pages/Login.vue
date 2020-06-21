<template>
	<main-layout>
		<form @submit.prevent="send">
			<div class="error" v-if="err">{{err}}</div>
			<div class="input-group form-group">
				<div class="input-group-prepend"><label for="email">
					<svg class="bi bi-person-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
						<path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
						<path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
					</svg>
				</label></div>
				<input id="email" name="email" type="email" placeholder="Email" required/>
			</div>
			<div class="input-group form-group">
				<label for="password">
					<svg class="bi bi-lock-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<rect width="11" height="9" x="2.5" y="7" rx="2"/>
						<path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
					</svg>
				</label>
				<input id="password" name="password" type="password" placeholder="Password" required/>
			</div>
			<br/>
			<input type="submit"/>
		</form>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";

	export default {
		name: "Login",
		components: {MainLayout},
		data: function () {
			return {err: null}
		},
		methods: {
			send: function (e) {
				const fd = new FormData(e.target);
				const object = {};
				fd.forEach((value, key) => {
					object[key] = value
				});
				const json = JSON.stringify(object);

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
					.catch(error => alert(error));
			}
		}
	}
</script>

<style scoped>

</style>