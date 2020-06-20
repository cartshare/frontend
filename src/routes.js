import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import List from "./pages/List";
import Wishlists from "./pages/Wishlists";

export default {
	"/": Home,
	"/signup": Signup,
	"/login": Login,
	"/logout": Logout,
	"/list": List,
	"/wishlists": Wishlists
}