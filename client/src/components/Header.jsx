import React from "react";
import Button from "./Button";
import { SiSololearn } from "react-icons/si";

const Header = () => {
  return (
    <div className="fixed top-0 w-full py-3 px-5 bg-[#404040]">
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2">
          <SiSololearn className="text-2xl" />
          <p className="text-xl font-bold">Learning Academy</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button btnText="SignIn" icon="signin" />
          <Button btnText="SignUp" icon="signup" />
        </div>
      </div>
    </div>
  );
};

export default Header;
