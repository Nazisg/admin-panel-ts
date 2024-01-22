import Dashboard from "../shared/components/Dashboard/index";
import Login from "../shared/components/Login/index";


const routerData = [
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
];
export default routerData;
