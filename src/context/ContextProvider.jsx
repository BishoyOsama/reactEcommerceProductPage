import { useContext, createContext, useState, useRef, useEffect } from "react";
import {
  imageProduct1,
  imageProduct2,
  imageProduct3,
  imageProduct4,
} from "../components/exports";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(false);
  const [lightBoxState, setLightBoxState] = useState(false);
  const [image, setImage] = useState(imageProduct1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartState, setCartState] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const cartRef = useRef(null);
  const slides = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];

  const handleImageChanger = (e) => {
    const parents = document.querySelectorAll("#parent");
    const sImages = document.querySelectorAll("#sImage");
    parents.forEach(
      (parent) =>
        (parent.className =
          "w-[15%] md:w-[20%] xl:w-[15%] rounded-xl overflow-hidden")
    );
    sImages.forEach(
      (sImage) => (sImage.className = "w-full hover:opacity-30 cursor-pointer")
    );
    if (e.target) {
      setImage(e.target.src);
      e.target.className = "w-full opacity-30";
      e.target.parentElement.className =
        "w-[15%] md:w-[20%] xl:w-[15%]  border-2 border-primeOrange rounded-xl overflow-hidden";
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuState(false);
      }
      if (buttonRef.current !== event.target.parentElement && !cartRef.current.contains(event.target)) {
        setCartState(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);
    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, [cartState]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setImage(slides[currentIndex]);
  };

  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setImage(slides[currentIndex]);
  };

  return (
    <StateContext.Provider
      value={{
        menuState,
        setMenuState,
        menuRef,
        lightBoxState,
        setLightBoxState,
        image,
        setImage,
        handleImageChanger,
        currentIndex,
        setCurrentIndex,
        slides,
        screenSize,
        setScreenSize,
        prevSlide,
        nextSlide,
        itemCount,
        setItemCount,
        cartItems,
        setCartItems,
        cartState,
        setCartState,
        cartRef,
        buttonRef,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
