import React from "react";
import { PiSignInBold } from "react-icons/pi";
import { IoLogIn } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";

const Button = ({ btnText, onclick, icon, variant, btnSize }) => {
  const btnIcon = {
    signin: <PiSignInBold />,
    signup: <IoLogIn />,
    explore: <TiArrowRight />
  };

  const bgColor = {
    black: "bg-black",
    orange: "bg-[#FF5400]",
  };

  const buttonSize = {
    sm: "px-4 py-1",
    md: "px-5 py-2 w-[250px] block mx-auto",
    lg: "px-5 py-3 w-[250px]"
  }

  return (
    <div
      className={`flex justify-center items-center gap-1 ${buttonSize[btnSize]} border-none rounded-md font-medium my-2 text-white cursor-pointer ${bgColor[variant]} hover:animate-pulse transition-transform duration-100`}
      onClick={onclick}
    >
      <button type="button" className="cursor-pointer">{btnText}</button>
      <p className="text-lg inline">{btnIcon[icon]}</p>
    </div>
  );
};

export default Button;
