import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import avatar from "../assets/avatar.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useStateContext } from "../context/ContextProvider";
const Navbar = () => {
  const { menuState, setMenuState, menuRef } =
    useStateContext();
  return (
    <>
      <nav className="w-full border-b-[1px] h-16 md:h-28 px-3 2xl:px-0 border-GrayishBlue flex justify-between">
        <div className="flex flex-row-reverse gap-x-4 md:flex-row md:gap-x-12 font-kumbh items-center h-full self-center">
          <div className="w-fit">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          {/* tablets and larger devices navigation */}
          <ul className="md:flex gap-x-7 items-center h-full hidden">
            <li className="list-none h-full flex items-center">
              <NavLink
                exact="true"
                to="/"
                className="hover:border-b-[5px] text-DarkGrayishBlue hover:text-VeryDarkBlue border-primeOrange h-full flex items-center"
              >
                Collections
              </NavLink>
            </li>
            <li className=" list-none h-full flex items-center">
              <NavLink
                exact="true"
                to="/"
                className="hover:border-b-[5px] text-DarkGrayishBlue hover:text-VeryDarkBlue border-primeOrange h-full flex items-center"
              >
                Men
              </NavLink>
            </li>
            <li className=" list-none h-full flex items-center">
              <NavLink
                exact="true"
                to="/"
                className="hover:border-b-[5px] text-DarkGrayishBlue hover:text-VeryDarkBlue border-primeOrange h-full flex items-center"
              >
                Women
              </NavLink>
            </li>
            <li className=" list-none h-full flex items-center">
              <NavLink
                exact="true"
                to="/"
                className="hover:border-b-[5px] text-DarkGrayishBlue hover:text-VeryDarkBlue border-primeOrange h-full flex items-center"
              >
                About
              </NavLink>
            </li>
            <li className=" list-none h-full flex items-center">
              <NavLink
                exact="true"
                to="/"
                className="hover:border-b-[5px] text-DarkGrayishBlue hover:text-VeryDarkBlue border-primeOrange h-full flex items-center"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* mobile devices navigation button */}
          <div className="flex md:hidden" ref={menuRef}>
            <button className="w-4" onClick={() => setMenuState(true)}>
              <img src={menu} alt="menu button" className="w-full" />
            </button>
            {/* small devices navigation menu  */}
            <nav
              className={`fixed top-0 left-0 z-30 bg-white w-[70vw] h-screen font-kumbh ${
                menuState ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col p-3 gap-y-10 relative top-4">
                <button
                  className="w-[0.85rem]"
                  onClick={() => setMenuState(false)}
                >
                  <img src={close} alt="close menu" className="w-full" />
                </button>
                <ul className="flex flex-col gap-y-4 items-start h-full pl-1">
                  <li className="list-none h-full flex items-center">
                    <NavLink exact="true" to="/" className="font-bold">
                      Collections
                    </NavLink>
                  </li>
                  <li className=" list-none h-full flex items-center">
                    <NavLink exact="true" to="/" className="font-bold">
                      Men
                    </NavLink>
                  </li>
                  <li className=" list-none h-full flex items-center">
                    <NavLink exact="true" to="/" className="font-bold">
                      Women
                    </NavLink>
                  </li>
                  <li className=" list-none h-full flex items-center">
                    <NavLink exact="true" to="/" className="font-bold">
                      About
                    </NavLink>
                  </li>
                  <li className=" list-none h-full flex items-center">
                    <NavLink exact="true" to="/" className="font-bold">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex gap-x-5 h-full items-center">
          <div className="w-fit relative cursor-pointer">
            <img src={cart} alt="cart" className="w-7" />
            <p className="absolute -top-1 left-4 bg-primeOrange w-fit px-2 py-[0.5px] rounded-full text-[0.6rem] text-white font-bold">
              3
            </p>
          </div>
          <div className="w-9 md:w-16 border border-white hover:border-primeOrange rounded-full cursor-pointer">
            <img
              src={avatar}
              alt="avatar"
              className="w-[100%] mx-auto p-[0.1rem]"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
