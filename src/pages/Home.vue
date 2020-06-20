<template>
	<main-layout>
		<h3>Home</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis fermentum feugiat. Fusce in dictum
			erat. Aliquam scelerisque sem non justo tincidunt tristique. Morbi viverra tellus dapibus lacus eleifend,
			non sollicitudin est pretium. Duis id ultrices lorem. Cras tincidunt ultricies sapien, sit amet accumsan
			nunc congue vel. Donec enim erat, dapibus eget finibus sed, malesuada eget lectus. Donec gravida dolor arcu,
			ut ullamcorper elit eleifend vitae. Sed porttitor, ipsum vitae fermentum eleifend, sem ex semper dolor,
			vitae fringilla nibh enim et lorem. Donec ante ex, finibus convallis magna sed, suscipit pretium nulla.
			Maecenas quis dignissim nulla, a rhoncus felis. Nam augue lacus, sodales id condimentum quis, porttitor ac
			velit. Donec porta sapien id orci dapibus pellentesque.</p>
		<p>Fusce in sodales metus, semper finibus diam. Donec sed dictum metus, sed viverra neque. Fusce et neque
			posuere, porttitor enim eget, euismod dui. Sed hendrerit faucibus auctor. Phasellus consequat finibus sem
			sit amet fermentum. Aenean ut nibh congue, cursus lectus sit amet, pretium diam. Mauris elementum erat non
			sagittis accumsan. Vestibulum vestibulum volutpat tincidunt. Donec tortor mauris, maximus et pulvinar quis,
			lobortis posuere tortor. Cras vel elementum odio. Sed lacinia quis lorem lacinia consequat. Integer sed nunc
			faucibus, consequat dui non, aliquet ipsum. Duis non imperdiet quam, sit amet finibus nulla. Aenean eleifend
			euismod magna, nec tincidunt diam mattis eu. Ut id nisl nisi. Donec ut sapien eu velit rhoncus elementum sed
			vel urna.
		</p>
	</main-layout>
</template>

<script>
	import MainLayout from "../components/MainLayout";

	export default {
		name: "Home",
		components: {MainLayout},
		data: function () {
			return {loggedIn: false}
		}
	}
</script>

<style scoped>

</style>