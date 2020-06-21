<template>
	<ul class="list">
		<li v-for="item in list" :key="item.desc" :title="item.desc + '(x' + item.qty + ')'">
			<p>{{item.desc}}</p>
			<span class="itemQty">x{{item.qty}}</span>
			<template v-if="personal">
				<label :for="item.id">
					<button @click="setWishlist" :class="item.onWishlist ? 'wl-remove' : 'wl-add'" :id="item.id">{{item.onWishlist ?
						"Remove From Wishlist" : "Add To Wishlist"}}
					</button>
				</label>
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
				let wishlisted = target.classList.contains("wl-add");
				const data = {itemId: target.id, wishlisted: wishlisted};
				const json = JSON.stringify(data);
				fetch("http://localhost:80/setItemWishlisted", {
					method: "POST",
					credentials: "include",
					body: json
				})
				.then(() => window.location.reload())
				.catch(error => alert(error));
			},
			complete(id) {
				const data = {itemId: id};
				const json = JSON.stringify(data);

				fetch("http://localhost:80/completeItem", {
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

	.list li * {
		padding: 5px;
	}

	.itemQty {
		opacity: 0.5;
	}
</style>