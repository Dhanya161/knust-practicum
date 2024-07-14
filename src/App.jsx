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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SheetComponent from "./components/ui/Sheet";

function App() {
  return (
    <BrowserRouter>
      <div style={{marginTop:"50px"}}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/manage" element={<Manage />} />
          <Route exact path="/activity" element={<Activity />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
