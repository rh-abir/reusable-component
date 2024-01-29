import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLyaout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLyaout;
