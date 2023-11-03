import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import OverlayLightBox from "./OverlayLightBox";
import { useStateContext } from "../context/ContextProvider";
import { Cart } from "./exports";
const Layout = () => {
  const { menuState, lightBoxState, screenSize, cartState } = useStateContext();
  return (
    <>
      <div
        className={`xl:max-w-[1400px] w-full mx-auto flex flex-col justify-between items-center h-screen${
          menuState ? "overflow-y-hidden" : ""
        }`}
      >
        <div className="w-full h-auto">
          <Navbar />
        </div>
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
      {/* overlay */}
      <div
        className={`bg-gray-950 h-screen bg-opacity-60 z-20 top-0 left-0 right-0 bottom-0 fixed w-full ${
          menuState || (lightBoxState && screenSize > 640) ? "block" : "hidden"
        }`}
      ></div>
      <OverlayLightBox />
      {cartState && <Cart />}
    </>
  );
};

export default Layout;
