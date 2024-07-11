import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Manage from './components/Manage';
import Activity from './components/Activity';
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
      <>
    <Header />
    <SideBar />
    <Dashboard />
    
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/manage" element={<Manage />} />
        <Route exact path="/activity" element={<Activity />}/>
      </Routes>
    
    </>
    </BrowserRouter>);
}

export default App;

