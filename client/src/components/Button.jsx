import React from "react";
import { PiSignInBold } from "react-icons/pi";
import { IoLogIn } from "react-icons/io5";

const Button = ({ btnText, onclick, icon, variant }) => {
  const btnIcon = {
    signin: <PiSignInBold />,
    signup: <IoLogIn />,
  };

  const bgColor = {
    black: "bg-black",
    orange: "bg-[#FF5400]",
  };

  return (
    <div
      className={`flex justify-center items-center gap-1 px-4 py-1 border-none rounded-md font-medium my-2 text-white cursor-pointer ${bgColor[variant]} hover:animate-pulse transition-transform duration-100`}
      onClick={onclick}
    >
      <p className="text-lg">{btnIcon[icon]}</p>
      <button type="button">{btnText}</button>
    </div>
  );
};

export default Button;
