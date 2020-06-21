<template>
	<main-layout>
		<form @submit.prevent="send">
			<div class="error" v-if="err">{{err}}</div>
			<label for="itemDesc">Item Description: </label>
			<input id="itemDesc" name="itemDesc" type="text" placeholder="Item Description" required/>
			<br/>
			<label for="itemQty">Amount: </label>
			<input id="itemQty" name="itemQty" type="number" placeholder="Item Amount" required/>
			<br/>
			<input type="submit"/>
		</form>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";

	export default {
		name: "Create",
		components: {MainLayout},
		data: function () {
			return {err: null};
		},
		methods: {
			send: function (e) {
				const fd = new FormData(e.target);
				const object = {itemDesc: fd.get("itemDesc"), itemQty: parseInt(fd.get("itemQty"))};
				const json = JSON.stringify(object);
				console.log(json);

				fetch("http://localhost:80/createItem", {
					method: "POST",
					credentials: "include",
					body: json
				})
					.then(response => {
						if (response.status === 200)
							window.location.href = "/list";
					})
					.catch(error => alert(error));
			}
		}
	}
</script>

<style scoped>

</style>