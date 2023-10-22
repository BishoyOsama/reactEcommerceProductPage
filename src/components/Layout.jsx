import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useStateContext } from "../context/ContextProvider";
const Layout = () => {
  const { menuState, setMenuState } = useStateContext();
  return (
    <>
      <div className="xl:max-w-[1400px] w-full mx-auto flex flex-col justify-between items-center">
        <div className="w-full">
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      {/* overlay */}
      <div
        className={`bg-gray-950 h-screen bg-opacity-50 z-20 top-0 left-0 right-0 bottom-0 fixed w-full ${
          menuState ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Layout;
