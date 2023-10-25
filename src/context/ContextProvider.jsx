import { useContext, createContext, useState, useRef, useEffect } from "react";
import { imageProduct1 } from "../components/exports";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(false);
  const [lightBoxState, setLightBoxState] = useState(false);
  const [image, setImage] = useState(imageProduct1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const menuRef = useRef(null);

  const handleImageChanger = (e) => {
    const parents = document.querySelectorAll("#parent");
    const sImages = document.querySelectorAll("#sImage");
    parents.forEach(
      (parent) => (parent.className = "w-[8%] rounded-xl overflow-hidden")
    );
    sImages.forEach(
      (sImage) => (sImage.className = "w-full hover:opacity-30 cursor-pointer")
    );
    if (e.target) {
      setImage(e.target.src);
      e.target.className = "w-full opacity-30";
      e.target.parentElement.className =
        "w-[8%] border-2 border-primeOrange rounded-xl overflow-hidden";
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuState(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
