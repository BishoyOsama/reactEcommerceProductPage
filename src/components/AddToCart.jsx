import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import { useStateContext } from "../context/ContextProvider";
import { useEffect } from "react";
const AddToCart = () => {
  const { itemCount, setItemCount, cartItems, setCartItems } =
    useStateContext();

  const minus = () => {
    if (itemCount > 0) {
      setItemCount((prevCount) => prevCount - 1);
    }
  };

  const plus = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const addToCart = () => {
    if (itemCount === 0) {
      null;
    } else {
      setCartItems([itemCount * 125]);
    }
  };

  useEffect(() => {
    if(itemCount === 0){
      setCartItems([])
    }
  }, [itemCount])

  return (
    <div className="w-full xl:w-1/2 flex flex-col justify-center font-kumbh py-2 px-4 xl:pr-48 gap-y-4 md:gap-y-7">
      <h4 className="text-primeOrange font-bold text-[1.2rem]">
        sneaker company
      </h4>
      <h1 className="font-black capitalize text-2xl md:text-3xl">
        fall limited edition sneakers
      </h1>
      <p className="text-GrayishBlue">
        these low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they`ll withstand everything the
        weather can offer
      </p>
      <div className="flex md:flex-col flex-row justify-between gap-x-4 font-bold">
        <div className="flex flex-row gap-x-5">
          <h2 className="text-2xl">$125.00</h2>
          <p className="bg-primeOrange bg-opacity-25 text-primeOrange px-2 py-1 h-fit rounded">
            50%
          </p>
        </div>
        <p className="text-GrayishBlue text-lg md:text-[1rem] line-through">
          $250.00
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full h-28 gap-y-3 md:h-12 md:gap-x-3">
        <div className="flex w-full md:w-1/3 gap-x-14 md:gap-x-5 bg-LightGrayishBlue justify-evenly items-center rounded-lg h-1/2 md:h-full">
          <button className="w-fit h-full" onClick={minus}>
            <FiMinus className="text-primeOrange" />
          </button>
          <p className="font-bold">{itemCount}</p>
          <button className="w-fit h-full" onClick={plus}>
            <FiPlus className="text-primeOrange" />
          </button>
        </div>
        <button
          className="flex w-full md:w-[60%] items-center justify-center gap-x-5 font-bold bg-primeOrange text-white rounded-lg hover:bg-opacity-90 h-1/2 md:h-full"
          onClick={addToCart}
        >
          <FiShoppingCart />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
