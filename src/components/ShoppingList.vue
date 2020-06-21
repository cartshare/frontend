<template>
	<ul class="list">
		<li v-for="item in list" :key="item.desc" :title="item.desc + '(' + item.qty + 'x)'">{{item.desc}} <span
				class="itemQty">{{item.qty}}x&nbsp;&nbsp;&nbsp;</span>
			<template v-if="personal">
				<label :for="item.id">Wishlist: </label>
				<input type="checkbox" v-if="personal" @change="setWishlist" :id="item.id" :checked="item.onWishlist"/>&nbsp;&nbsp;&nbsp;
			</template>
			<button @click="complete(item.id)">Complete</button>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "ShoppingList",
		props: {
			list: Array,
			personal: Boolean
		},
		methods: {
			setWishlist(e) {
				const target = e.target;
				const data = {itemId: target.id, wishlisted: target.checked};
				const json = JSON.stringify(data);
				fetch("http://localhost:80/setItemWishlisted", {
					method: "POST",
					credentials: "include",
					body: json
				});
			},
			complete(id) {
				const data = {itemId: id};
				const json = JSON.stringify(data);

				fetch("http://localhost:80/completeItem",{
					method: "POST",
					credentials: "include",
					body: json
				})
				.then(() => window.location.reload())
			}
		}
	}
</script>

<style scoped>

</style>