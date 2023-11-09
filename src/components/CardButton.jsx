
const CardButton = ({ text }) => {
  return (
    <button className="w-1/2 text-sm xl:text-[1rem] bg-primeOrange text-white px-2 py-2 uppercase font-kumbh rounded-sm hover:bg-white outline-none hover:outline-1 hover:outline-primeOrange hover:text-black">
      {text}
    </button>
  );
};

export default CardButton;
