import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import Motoristas from "views/examples/Motoristas.jsx";
import Add from "views/examples/Add.jsx";
import Edit from "views/examples/Edit.jsx";

var routes = [
  {
    path: "/adicionar",
    name: "Adicionar",
    icon: "ni ni-tv-2 text-primary",
    component: Add,
    layout: "/admin"
  },
  {
    path: "/editar",
    name: "Editar",
    icon: "ni ni-tv-2 text-primary",
    component: Edit,
    layout: "/admin"
  },
  {
    path: "/motoristas",
    name: "Motoristas",
    icon: "ni ni-tv-2 text-primary",
    component: Motoristas,
    layout: "/admin"
  },
];
export default routes;
