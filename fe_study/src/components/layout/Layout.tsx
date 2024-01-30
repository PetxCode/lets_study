import Header from "../static/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="text-blue-950">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
