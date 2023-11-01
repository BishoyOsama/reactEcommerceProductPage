import LightBox from "./LightBox";
import AddToCart from "./AddToCart";
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:gap-x-4 xl:gap-x-0 md:flex-row md:px-10 relative md:top-20 h-full">
        <LightBox />
        <AddToCart/>
      </div>
    </>
  );
};

export default Home;
