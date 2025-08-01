import React from "react";
import { PiSignInBold } from "react-icons/pi";
import { IoLogIn } from "react-icons/io5";

const Button = ({ btnText, onclick, icon, variant }) => {
  const btnIcon = {
    signin: <PiSignInBold />,
    signup: <IoLogIn />,
  };

  const bgColor = {
    blue: "bg-gradient-to-l from-blue-700 via-blue-600 to-blue-800",
    red: "bg-gradient-to-l from-red-600 via-red-500 to-red-700"
  }

  return (
    <div className={`flex justify-center items-center gap-1 px-4 py-1 border-none rounded-md font-medium my-2 cursor-pointer ${bgColor[variant]} hover:animate-pulse transition-transform duration-100`} onClick={onclick}>
      <p className="text-lg">{btnIcon[icon]}</p>
      <button type="button">
        {btnText}
      </button>
    </div>
  );
};

export default Button;
