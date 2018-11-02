/** Components */
import Home from "../components/Home/Home";
import Fragments from "../components/Fragments";
import List from "../components/List/List";

/** Route config */
const RouteConfig = [
  {
    path: "",
    component: Home,
    exact: true
  },
  {
    path: "/fragments",
    component: Fragments
  },
  {
    path: "/list",
    component: List
  }
];

export default RouteConfig;
