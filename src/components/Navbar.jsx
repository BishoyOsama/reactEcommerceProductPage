import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import avatar from "../assets/avatar.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useStateContext } from "../context/ContextProvider";
const Navbar = () => {
  const { menuState, setMenuState, menuRef, buttonRef, cartItems, setCartState } =
    useStateContext();

  const navLinkMdStyling =
    "hover:border-b-[5px] text-DarkGrayishBlue hover:text-VeryDarkBlue border-primeOrange h-full flex items-center";
  const navLinkSmStyling = "font-bold hover:text-primeOrange";
  const liStyling = "list-none h-full flex items-center";
  return (
    <>
      <nav className="w-full relative md:border-b-[1px] h-16 md:h-28 px-3 2xl:px-0 border-GrayishBlue flex justify-between">
        <div className="flex flex-row-reverse gap-x-4 md:flex-row md:gap-x-12 font-kumbh items-center h-full self-center">
          <div className="w-fit cursor-pointer">
            <img src={logo} alt="logo" className="w-full" />
          </div>
          {/* tablets and larger devices navigation */}
          <ul className="md:flex gap-x-7 items-center h-full hidden">
            <li className={liStyling}>
              <NavLink exact="true" to="/" className={navLinkMdStyling}>
                Collections
              </NavLink>
            </li>
            <li className={liStyling}>
              <NavLink exact="true" to="/" className={navLinkMdStyling}>
                Men
              </NavLink>
            </li>
            <li className={liStyling}>
              <NavLink exact="true" to="/" className={navLinkMdStyling}>
                Women
              </NavLink>
            </li>
            <li className={liStyling}>
              <NavLink exact="true" to="/" className={navLinkMdStyling}>
                About
              </NavLink>
            </li>
            <li className={liStyling}>
              <NavLink exact="true" to="/" className={navLinkMdStyling}>
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
              className={`fixed top-0 left-0 z-30 bg-white w-[70vw] h-screen font-kumbh duration-300 ${
                menuState ? ("translate-x-0") : ("-translate-x-[100%]")
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
                  <li className={liStyling}>
                    <NavLink exact="true" to="/" className={navLinkSmStyling}>
                      Collections
                    </NavLink>
                  </li>
                  <li className={liStyling}>
                    <NavLink exact="true" to="/" className={navLinkSmStyling}>
                      Men
                    </NavLink>
                  </li>
                  <li className={liStyling}>
                    <NavLink exact="true" to="/" className={navLinkSmStyling}>
                      Women
                    </NavLink>
                  </li>
                  <li className={liStyling}>
                    <NavLink exact="true" to="/" className={navLinkSmStyling}>
                      About
                    </NavLink>
                  </li>
                  <li className={liStyling}>
                    <NavLink exact="true" to="/" className={navLinkSmStyling}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex gap-x-5 h-full items-center">
          <button className="w-fit relative cursor-pointer" onClick={() => setCartState(prevState => !prevState)} ref={buttonRef}>
            <img src={cart} alt="cart" className="w-7" />
            {cartItems.length !== 0 ? (
              <p className="absolute -top-1 left-4 bg-primeOrange w-fit px-2 py-[0.5px] rounded-full text-[0.6rem] text-white font-bold">
                {cartItems.length}
              </p>
            ) : null}
          </button>
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
