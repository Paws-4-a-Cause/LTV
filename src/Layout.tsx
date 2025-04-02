import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* You can add your header, navigation, or any common layout components here */}
      <header>
        <Navbar />
      </header>
      
      {/* This is where child routes will be rendered */}
      <Outlet />

      {/* You can also include a footer or other components here */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
