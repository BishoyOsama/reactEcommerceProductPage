import React from "react";
import { useStateContext } from "../context/ContextProvider";
import {
  imageProduct1,
  imageProduct2,
  imageProduct3,
  imageProduct4,
} from "./exports";
const OverlayLightBox = ({ mainImage }) => {
  const { lightBoxState, setLightBoxState, lightBoxRef } = useStateContext();
  return (
    <div
      className={`absolute z-40 w-full inset-0 ${
        lightBoxState ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col h-full w-[50%] gap-y-5 items-center justify-center mx-auto">
        <button className="w-[60%] flex flex-col items-end" onClick={() => setLightBoxState(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>{" "}
        </button>
        <div className="w-[60%]">
          <img src={imageProduct1} alt="" className="w-full rounded-xl" />
        </div>

        <div className="flex gap-x-[0.85rem] justify-center">
          <div
            className="w-[10%] rounded-xl overflow-hidden cursor-pointer"
            id="parent"
          >
            <img
              src={imageProduct1}
              alt=""
              className="w-full hover:opacity-30"
              onClick={() => {}}
              id="sImage"
            />
          </div>
          <div
            className="w-[10%] rounded-xl overflow-hidden cursor-pointer"
            id="parent"
          >
            <img
              src={imageProduct2}
              alt=""
              className={`w-full hover:opacity-30 `}
              onClick={() => {}}
              id="sImage"
            />
          </div>
          <div
            className="w-[10%] rounded-xl overflow-hidden cursor-pointer"
            id="parent"
          >
            <img
              src={imageProduct3}
              alt=""
              className={`w-full hover:opacity-30 `}
              onClick={() => {}}
              id="sImage"
            />
          </div>
          <div
            className="w-[10%] rounded-xl overflow-hidden cursor-pointer"
            id="parent"
          >
            <img
              src={imageProduct4}
              alt=""
              className="w-full hover:opacity-30"
              onClick={() => {}}
              id="sImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayLightBox;
