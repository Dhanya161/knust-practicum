import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import Activity from "./components/Activity/Activity";
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
import ExpandCard from "./components/Manage/ExpandCard";
import { Loader } from "lucide-react";
import {auth} from "./firebase.config"
import { useEffect } from "react";
import SignInComponent from "./authentication/signInComponent"
import {getCookie} from "./lib/utils"
import { elements } from "chart.js";
import Manage from "./components/Manage/Manage"



const routes = [
  {
    path: "/",
    action: async () => {
      if(!getCookie("user")){
        window.location.href="/auth"
      }
    },
    loader: async (request) => {
      if(!getCookie("user")){
        window.location.href="/auth"
      }
      return await request;
    },
    element: <Dashboard />,
  },
  {
    path: "manage/:name",
    loader : async (request)=>{
      if(!getCookie("user")){
        window.location.href="/auth"
      }
      return await request;
    },
    element: <ExpandCard />,
  },
  {
    path: "activity",
    loader : async (request)=>{
      if(!getCookie("user")){
        window.location.href="/auth"
      }
      return await request;
    },
    element: <Activity />,
  },
  {
    path: "/auth",
    
    element: <SignInComponent />,
  },
  {
    path: "/manage",
    element: <Manage/>

  }

];

const router = createBrowserRouter(routes);

function App() {
  // useEffect(()=>{
  //  if(!getCookie("user")){
  //    window.location.href="/auth"
  //  }
  // },[])
  return (
    <div style={{ marginTop: "100px" }} className="font-normal">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
