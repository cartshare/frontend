<template>
	<ul class="list">
		<li v-for="item in list" :key="item.desc" :title="item.desc + '(x' + item.qty + ')'">
			<p>{{item.desc}}</p>
			<span class="itemQty">x{{item.qty}}</span>
			<template v-if="personal">
				<label :for="item.id">Wishlist: </label>
				<input type="checkbox" @change="setWishlist" :id="item.id" :checked="item.onWishlist"/>
			</template>
			<template v-else>
				(Requested by: {{item.owner}})
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
.list > * {
	display: flex;
}
.itemQty {
	opacity: 0.7;
}
</style>