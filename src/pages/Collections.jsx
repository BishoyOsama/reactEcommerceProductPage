
const Collections = () => {
  return (
    <main className="h-screen w-full bg-collection-background bg-cover bg-no-repeat bg-center relative overflow-hidden">
      <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-DarkGrayishBlue/60 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col w-full md:w-fit mx-auto h-full justify-center items-center gap-y-5 font-kumbh text-center md:text-start">
        <h1 className="flex flex-col capitalize">
          <span className="text-[3rem] md:text-[3.3rem] text-white uppercase">Discover</span>
          <div className="text-primeOrange text-[2.8rem] md:text-[3rem]">
            new collection <span className="text-white">coming soon</span>
          </div>
        </h1>
        <div className="flex flex-col md:flex-row w-[95%] md:w-full justify-between gap-y-5">
          <input type="email"  className="w-full md:w-3/4 h-14 outline-none rounded-lg focus:outline-primeOrange px-4 placeholder:capitalize" placeholder="enter email"/>
          <button className="w-full h-14 md:w-[20%] text-center rounded-lg text-white capitalize hover:bg-transparent outline-primeOrange outline-1 outline bg-primeOrange">Notify me</button>
        </div>
      </div>
    </main>
  );
};

export default Collections;
