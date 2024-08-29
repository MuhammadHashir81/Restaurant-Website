import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import '../mycss.css'
import Footer from "./Footer";

const Layout = () => {
    return (
      <div className="layout">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    );
  };

  export default Layout;