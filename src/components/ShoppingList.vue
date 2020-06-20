<template>
	<ul class="list">
		<li v-for="item in list" :key="item.desc" :title="item.desc + '(' + item.qty + 'x)'">{{item.desc}} <span
				class="itemQty">{{item.qty}}x</span></li>
	</ul>
</template>

<script>
	export default {
		name: "ShoppingList",
		props: {
			list: Array
		}
	}
</script>

<style scoped>

</style>