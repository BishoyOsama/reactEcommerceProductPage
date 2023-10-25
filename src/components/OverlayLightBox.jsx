import React from "react";
import { useStateContext } from "../context/ContextProvider";
import {
  imageProduct1,
  imageProduct2,
  imageProduct3,
  imageProduct4,
} from "./exports";
const OverlayLightBox = () => {
  const slides = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];
  const {
    lightBoxState,
    setLightBoxState,
    handleImageChanger,
    image,
    setImage,
    currentIndex,
    setCurrentIndex,
  } = useStateContext();

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
    setImage(slides[currentIndex])
  };

  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
    setImage(slides[currentIndex])
  };
  return (
    <div
      className={`absolute z-40 w-full inset-0 ${
        lightBoxState ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col h-full w-[50%] gap-y-5 items-center justify-center mx-auto">
        <div className="w-[55%] flex flex-col gap-y-5 relative group">
          <button className="self-end" onClick={() => setLightBoxState(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              className="hover:fill-primeOrange fill-white"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <img src={image} alt="" className="w-full rounded-xl duration-300" />
          <div className="w-full flex justify-between absolute top-1/2">
            <button
              className="relative -left-5 rounded-full py-2 px-3 bg-white group hidden group-hover:flex justify-center items-center "
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="18"
                className="group-hover:stroke-primeOrange stroke-black w-fit scale-75"
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <button
              className="relative -right-5 rounded-full py-2 px-3 bg-white group hidden group-hover:flex justify-center items-center "
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="18"
                className="group-hover:stroke-primeOrange stroke-black w-fit scale-75"
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-x-[0.85rem] justify-center">
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
    </div>
  );
};

export default OverlayLightBox;
