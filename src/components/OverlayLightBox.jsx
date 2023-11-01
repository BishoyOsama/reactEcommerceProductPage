import SlideControlButtons from "./SlideControlButtons";
import { useStateContext } from "../context/ContextProvider";

const OverlayLightBox = () => {
  const {
    lightBoxState,
    setLightBoxState,
    handleImageChanger,
    image,
    slides,
    screenSize,
  } = useStateContext();

  const position = {
    right: "-right-5",
    left: "-left-5"
  }
  return (
    <div
      className={`absolute z-40 w-[50%] inset-0 mx-auto ${
        lightBoxState && screenSize > 640 ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col h-full md:w-full xl:w-[50%] gap-y-5 items-center justify-center mx-auto">
        <div className="w-full flex flex-col gap-y-5 relative">
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
          <SlideControlButtons position={position} additionalClasses={""}/>
        </div>

        <div className="flex gap-x-[0.85rem] justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              className="w-[15%] md:w-[20%] xl:w-[15%] rounded-xl overflow-hidden cursor-pointer"
              id="parent"
              key={slideIndex}
            >
              <img
                src={slide}
                alt="product image"
                className="w-full hover:opacity-30"
                onClick={handleImageChanger}
                id="sImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlayLightBox;
