import LightBox from "./LightBox";
import AddToCart from "./AddToCart";
const Home = () => {
  return (
    <main className="h-full">
      <div className="flex flex-col md:gap-x-4 xl:gap-x-0 md:flex-row md:px-10 relative top-0 md:top-20 ">
        <LightBox />
        <AddToCart/>
      </div>
    </main>
  );
};

export default Home;
