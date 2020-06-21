<template>
	<main-layout>
		<form @submit.prevent="send">
			<div class="error" v-if="err">{{err}}</div>
			<label for="email">Email: </label>
			<input id="email" name="email" type="email" placeholder="Email" required/>
			<br/>
			<label for="password">Password: </label>
			<input id="password" name="password" type="password" placeholder="Password" required/>
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