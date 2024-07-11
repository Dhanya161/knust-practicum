import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import {add} from "google-fonts"


const font = add({
  family: '',
  styles: ['400', '700'],
  display: 'swap'
});

function App() {
  return (
    <div style={{ overflowX: "hidden", margin: "50px 10px 10px 10px" }}>
      <Header />
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
