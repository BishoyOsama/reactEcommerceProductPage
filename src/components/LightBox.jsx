import { useStateContext } from "../context/ContextProvider";
import { SlideControlButtons } from "./exports";
const LightBox = () => {
  const { handleImageChanger, setLightBoxState, image, slides } =
    useStateContext();

  const position = {
    right: "right-4",
    left: "left-4",
  };

  return (
    <>
      <div className="flex flex-col w-full xl:w-1/2 gap-y-5 items-center justify-center">
        <div className="w-full xl:w-[70%] relative cursor-pointer">
          <img
            src={image}
            alt="main image"
            className="w-full md:rounded-xl h-[21rem] object-top object-cover md:h-full"
            onClick={() => {
              setLightBoxState(true);
            }}
          />
          <setLightBoxState />
          <SlideControlButtons
            position={position}
            additionalClasses={"flex md:hidden"}
          />
        </div>

        <div className="hidden md:flex gap-x-[1.3rem] justify-center">
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
    </>
  );
};

export default LightBox;
