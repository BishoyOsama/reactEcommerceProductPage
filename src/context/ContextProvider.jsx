import { useContext, createContext, useState, useRef, useEffect } from "react";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef(null);

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
