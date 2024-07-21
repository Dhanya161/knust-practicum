import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Manage from "./components/Manage";
import Activity from "./components/Activity";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  RouteObject
} from "react-router-dom";
import SheetComponent from "./components/ui/Sheet";
import ExpandCard from "./components/ExpandCard";
import { Loader } from "lucide-react";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "manage/:name",
    loader : async (request)=>await  request,
    element: <ExpandCard />,
  },
  {
    path: "activity",
    element: <Activity />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
