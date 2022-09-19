import Home from "./Home";
import Post from "./post";
import Item from "./Item";
import ItemDetails from "./ItemDetails";
import Info from "./info";
import Pic from "./Pic";
import Profile from "./Profile";
import Admin from "./Admin";
import CreateItem from "./CreateItem";
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact";
import Notification from "./Notification";
import Chat from "./Chat";
import Notfound from "./404";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/editprofile/info", component: <Info /> },
  { path: "/editprofile/pic", component: <Pic /> },
  { path: "/profile", component: <Profile /> },
  { path: "/post", component: <Post /> },
  { path: "/item", component: <Item /> },
  { path: "/item-details/:id", component: <ItemDetails /> },
  { path: "/admin", component: <Admin /> },
  { path: "/create-item/:name", component: <CreateItem /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "/contact", component: <Contact /> },
  { path: "/notification", component: <Notification /> },
  { path: "/chat/:id", component: <Chat /> },
  { path: "*", component: <Notfound /> },
];

export default routes;
