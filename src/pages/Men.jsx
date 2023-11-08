import shoesData from "../data/output.json";
import { Card } from "../components/exports";
const Men = () => {
  console.log(shoesData[3]);
  return (
    <main className="h-screen w-full">
      <div className="w-full flex flex-col gap-y-10 relative top-10 px-3 md:px-0">
        <h1 className="font-kumbh text-4xl">Men</h1>
        <div className="w-full grid auto-rows-auto grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-1">
          {shoesData.filter((shoes ,index) => index < 50).map((shoes, index) => (
            <Card 
            key={shoes.id}
            image={shoes.imageURLs}
            brand={shoes.brand}
            name={shoes.name}
            price={shoes["prices.amountMax"]}
            currency={shoes["prices.currency"]}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Men;
