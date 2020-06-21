import Vue from 'vue'
import routes from "./routes";
import NotFound from "./pages/404"
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false;

const vm = new Vue({
	el: "#app",
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent() {
			return routes[this.currentRoute] || NotFound;
		}
	},
	render(h) {
		return h(this.ViewComponent)
	}
});

window.addEventListener("popstate", () => {
	vm.currentRoute = window.location.pathname;
});