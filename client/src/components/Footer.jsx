import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-20 py-5 bg-[#0A2735] text-white bottom-0 w-full justify-start md:justify-center gap-5 md:items-center mx-auto">
      <div className="flex flex-col md:w-[450px]">
        <img
          src="https://valenta.io/wp-content/uploads/elementor/thumbs/Wtlogo-r3r6p1igplluslxg8hmblwllpjq3pnafadde93xd46.png"
          alt="logo"
          className="w-[150px] my-5"
        />
        <p className="py-2">
          Empowering students with high-quality, flexible online courses for
          in-demand skills.
        </p>
      </div>
      <div className="flex flex-col gap-2 md:w-[400px]">
        <h4 className="font-semibold text-xl py-2">Quick Links</h4>
        <div className="flex flex-col gap-2">
          <Link to="home" smooth={true} duration={500}>
            <p className="cursor-pointer px-2 rounded hover:bg-gray-500 transition-transform duration-150">Home</p>
          </Link>
          <Link to="courses" smooth={true} duration={500}>
            <p className="cursor-pointer px-2 rounded hover:bg-gray-500 transition-transform duration-150">Courses</p>
          </Link>
          <Link to="features" smooth={true} duration={500}>
            <p className="cursor-pointer px-2 rounded hover:bg-gray-500 transition-transform duration-150">Features</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:w-[400px]">
        <h4 className="font-semibold text-xl py-2">Contact Information</h4>
        <div className="flex flex-col gap-2">
          <a href="mailto:munificenttech@gmail.com" className="cursor-pointer px-2 rounded hover:bg-gray-500 transition-transform duration-150">
            <MdOutlineMailOutline className="inline me-2 text-xl" />
            munificenttech@gmail.com
          </a>
          <a href="tel:+9190XXXXXXXX" className="cursor-pointer px-2 rounded hover:bg-gray-500 transition-transform duration-150">
            <MdAddCall className="inline me-2 text-xl" />
            +9190XXXXXXXX
          </a>
          <a  className="cursor-pointer px-2 rounded hover:bg-gray-500 transition-transform duration-150">
            <FaRegAddressCard className="inline me-2 text-xl" />
            Nashik, Maharashtra
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:w-[400px]">
        <h4 className="font-semibold text-xl py-2">
          Follow Us on Social Media
        </h4>
        <div className="flex gap-3">
          <AiOutlineInstagram className="text-3xl p-1 rounded-full border-1 border-[#FF5400]" />
          <TbBrandLinkedin className="text-3xl p-1 rounded-full border-1 border-[#FF5400]" />
          <FaXTwitter className="text-3xl p-1 rounded-full border-1 border-[#FF5400]" />
        </div>
        <p className="pt-5">Copyright 2025. All Rights Reserved. Valenta</p>
      </div>
    </div>
  );
};

export default Footer;
