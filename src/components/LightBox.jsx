import { useState } from "react";
import {
  imageProduct1,
  imageProduct2,
  imageProduct3,
  imageProduct4,
} from "./exports";
import { useStateContext } from "../context/ContextProvider";

const LightBox = () => {
  const { lightBoxState, setLightBoxState } = useStateContext();
  const [image, setImage] = useState(imageProduct1);
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
  return (
    <>
      <div className="flex flex-col w-fit gap-y-5">
        <div className="w-[35%]">
          <img
            src={image}
            alt=""
            className="w-full rounded-xl"
            onClick={() => setLightBoxState(true)}
          />
        </div>

        <div className="flex gap-x-[0.85rem]">
          <div
            className="w-[8%] rounded-xl overflow-hidden cursor-pointer"
            id="parent"
          >
            <img
              src={imageProduct1}
              alt=""
              className="w-full hover:opacity-30"
              onClick={handleImageChanger}
              id="sImage"
            />
          </div>
          <div
            className="w-[8%] rounded-xl overflow-hidden cursor-pointer"
            id="parent"
          >
            <img
              src={imageProduct2}
              alt=""
              className={`w-full hover:opacity-30 `}
              onClick={handleImageChanger}
              id="sImage"
            />
          </div>
          <div
            className="w-[8%] rounded-xl overflow-hidden cursor-pointer"
            id="parent"
          >
            <img
              src={imageProduct3}
              alt=""
              className={`w-full hover:opacity-30 `}
              onClick={handleImageChanger}
              id="sImage"
            />
          </div>
          <div
            className="w-[8%] rounded-xl overflow-hidden cursor-pointer"
            id="parent"
          >
            <img
              src={imageProduct4}
              alt=""
              className="w-full hover:opacity-30"
              onClick={handleImageChanger}
              id="sImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LightBox;
