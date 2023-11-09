import logo from "../assets/logo.svg";
import { BiLogoFacebook, BiCopyright } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const categories = ["men", "women", "kids"];
  const communication = ["contact", "about us"];
  return (
    <footer className="mt-16 py-16 flex flex-col md:flex-row font-kumbh px-5 relative border-t-[1px] border-primeOrange gap-y-5 md:gap-y-0">
      <div className="w-1/2 flex flex-col gap-y-3">
        <img src={logo} alt="logo"  className="w-fit"/>
        {/* social icons */}
        <div className="flex gap-x-7 text-xl">
            <BiLogoFacebook className="hover:text-primeOrange cursor-pointer"/>
            <RiTwitterXFill className="hover:text-primeOrange cursor-pointer"/>
            <BsInstagram className="hover:text-primeOrange cursor-pointer"/>
        </div>
        <p className="absolute bottom-0 text-DarkGrayishBlue capitalize flex items-center gap-x-2 text-xs md:text-[1rem]"> <BiCopyright/> all terms reserved 2023</p>
      </div>
      <div className="w-1/2 flex flex-col md:flex-row gap-y-5 xl:gap-x-5">
        <div className="flex flex-col gap-y-3">
          <h3 className="capitalize text-VeryDarkBlue font-bold xl:text-lg">
            Categories
          </h3>
          <ul className="flex flex-col gap-y-1">
            {categories.map((category, index) => (
              <li key={index} className="text-GrayishBlue capitalize">{category}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <h3 className="capitalize text-VeryDarkBlue font-bold xl:text-lg">
            Communication
          </h3>
          <ul className="flex flex-col gap-y-1">
            {communication.map((item, index) => (
              <li key={index} className="text-GrayishBlue capitalize">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
