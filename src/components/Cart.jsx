import { imageProduct1 } from "./exports";
import { BsTrash } from "react-icons/bs";
import { useStateContext } from "../context/ContextProvider";
const Cart = () => {
  const { itemCount, cartItems, setCartItems, cartRef, cartState } =
    useStateContext();
  const removeItem = () => {
    setCartItems([]);
  };
  return (
    <>
      <div
        className={`absolute bg-white shadow-xl w-[95%] mx-auto md:mx-0 md:w-[40vw] xl:w-[21rem] top-[5rem] md:top-[6rem] inset-x-0 md:inset-x-auto md:right-[8vw] rounded-lg z-10 ${cartState && "animate-cartOpacity"}`}
        ref={cartRef}
      >
        <div className="w-full border-b-2 py-4 px-5">
          <h4 className="font-bold font-kumbh">Cart</h4>
        </div>
        {cartItems.length !== 0 ? (
          <div className="w-full flex flex-col gap-y-7 py-4 px-5">
            <div className="w-full flex items-center justify-between gap-x-3">
              <img
                src={imageProduct1}
                alt="product image"
                className="w-[25%] rounded-lg"
              />
              <div className="flex flex-col font-kumbh">
                <p className="capitalize text-DarkGrayishBlue text-opacity-80">
                  fall limited edition sneakers
                </p>
                <p className="text-DarkGrayishBlue text-opacity-80">
                  $125.00 <span>x</span> {itemCount}{" "}
                  <span className="font-bold text-black">
                    ${125 * itemCount}
                  </span>
                </p>
              </div>
              <BsTrash
                className="text-DarkGrayishBlue text-opacity-80 text-lg cursor-pointer"
                onClick={removeItem}
              />
            </div>
            <button
              type="button"
              className="w-full capitalize bg-primeOrange text-white font-kumbh font-bold py-3 rounded-lg cursor-pointer"
            >
              checkout
            </button>
          </div>
        ) : (
          <div className="py-16 px-5 w-full flex justify-center items-center text-center first-letter:capitalize font-kumbh font-bold text-GrayishBlue h-[15rem] md:h-auto">
            your cart is empty
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
