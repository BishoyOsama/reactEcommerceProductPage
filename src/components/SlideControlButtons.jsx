import { useStateContext } from "../context/ContextProvider";

const SlideControlButtons = ({position = {right, left} , additionalClasses}) => {
  const { prevSlide, nextSlide } = useStateContext();
  return (
    <div className="w-full flex justify-between absolute top-1/2">
      <button
        className={`relative ${position.left} ${additionalClasses} rounded-full py-2 px-3 bg-white group justify-center items-center `}
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
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        className={`relative ${position.right} ${additionalClasses} rounded-full py-2 px-3 bg-white group justify-center items-center`}
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
  );
};

export default SlideControlButtons;
