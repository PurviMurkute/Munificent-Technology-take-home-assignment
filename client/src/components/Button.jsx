import React from "react";
import { PiSignInBold } from "react-icons/pi";
import { IoLogIn } from "react-icons/io5";

const Button = ({ btnText, onclick, icon }) => {
  const btnIcon = {
    signin: <PiSignInBold />,
    signup: <IoLogIn />,
  };

  return (
    <div className="flex justify-center items-center gap-1 bg-gradient-to-l from-blue-700 via-blue-600 to-blue-800 px-4 py-1 border-none rounded-md font-medium hover:animate-pulse transition-transform duration-100">
      <p className="text-lg">{btnIcon[icon]}</p>
      <button type="button" className="" onClick={onclick}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
