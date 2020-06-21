<template>
	<main-layout>
		<template v-if="loggedIn">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis fermentum feugiat. Fusce in
				dictum
				erat. Aliquam scelerisque sem non justo tincidunt tristique. Morbi viverra tellus dapibus lacus
				eleifend,
				non sollicitudin est pretium. Duis id ultrices lorem. Cras tincidunt ultricies sapien, sit amet accumsan
				nunc congue vel. Donec rhoncus felis. Nam augue lacus, sodales id condimentum quis, porttitor ac
				velit. Donec porta sapien id orci dapibus pellentesque.</p>
			<p>Fusce in sodales metus, semper finibus diam. Donec sed dictum metus, sed viverra neque. Fusce et neque
				posuere, porttitor. Cras vel elementum odio. Sed lacinia quis lorem lacinia consequat. Integer sed nunc
				faucibus, consequat dui non, aliquet ipsum. Duis non imperdiet quam, sit amet finibus nulla. Aenean
				eleifend
				euismod magna, nec tincidunt diam mattis eu. Ut id nisl nisi. Donec ut sapien eu velit rhoncus elementum
				sed
				vel urna.
			</p>
		</template>
		<template v-else>
			<div v-for="notif in notifications" :key="notif.">

			</div>
		</template>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";

	export default {
		name: "Home",
		components: {MainLayout},
		data: function () {
			return {
				loggedIn: false,
				notifications: []
			}
		}
	}
</script>

<style scoped>

</style>