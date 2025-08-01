import React, { useEffect, useState } from "react";
import Button from "./Button";
import { SiSololearn } from "react-icons/si";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const [student, setStudent] = useState("");

  useEffect(() => {
    const currentStudent = JSON.parse(localStorage.getItem("currentStudent"));

    if (currentStudent) {
      setStudent(currentStudent);
    }
  }, []);

  const handleSignout = () => {
    localStorage.clear();
    toast.success("SignOut Successful");
  };

  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full py-3 px-5 z-10 bg-[#404040]">
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2">
          <SiSololearn className="text-2xl" />
          <p className="text-xl font-bold">Learning Academy</p>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          {!student ? (
            <>
              <Button
                btnText="SignIn"
                icon="signin"
                variant="blue"
                onclick={() => {
                  navigate("/signin");
                }}
              />
              <Button
                btnText="SignUp"
                icon="signup"
                variant="blue"
                onclick={() => {
                  navigate("/signup");
                }}
              />
            </>
          ) : (
            <>
              <Button btnText="My Enrolled Courses" variant="blue" />
              <Button
                btnText="SignOut"
                icon="signup"
                variant="red"
                onclick={() => {
                  handleSignout;
                }}
              />
            </>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Header;
