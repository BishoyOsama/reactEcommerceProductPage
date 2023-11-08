import output from "../data/output.json";
import { CardButton } from "./exports";

const Card = ({image, name, price, currency, brand}) => {
  return (
    <div className="w-full p-2 font-kumbh flex flex-col gap-y-4 border-2 border-LightGrayishBlue shadow-md shadow-VeryDarkBlue/30 group">
      <div className="w-full relative border-LightGrayishBlue border-2">
        <img
          src={image}
          alt={name}
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="w-full absolute left-1 bottom-0">
          <h3 className="text-DarkGrayishBlue group-hover:text-primeOrange">
            {price} {currency}
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h6 className="text-VeryDarkBlue text-[0.9rem]">{name}</h6>
        <p className="text-GrayishBlue text-xs">{brand}</p>
        <div className="flex gap-x-2">
          <CardButton text={"buy now"} />
          <CardButton text={"add to cart"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
