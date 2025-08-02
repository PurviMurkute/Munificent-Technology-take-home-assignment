import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-scroll";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [currentStudent, setCurrentStudent] = useState("");
  const [ isDropDownOpen, setIsDropDownOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  useEffect(() => {
    const currentstudent = JSON.parse(localStorage.getItem("currentStudent"));

    if (currentstudent) {
      setCurrentStudent(currentstudent);
    }
  }, []);

  const handleSignout = () => {
    localStorage.clear();
    toast.success("SignOut Successful");
    window.location.reload();
  };

  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full py-2 px-5 z-10 bg-[#fff]">
      <div className="flex justify-between">
        <div
          className="flex justify-center items-center gap-2"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D4D0BAQHghzGsggOR9g/company-logo_100_100/B4DZV0US.fHkAQ-/0/1741413232954/munificent_technology_services_logo?e=1756944000&v=beta&t=qQ7sp42I3wmlMLu0I7EJKj28RLYdL1E9A2ne1QE5jeE"
            alt="logo"
            className="w-[30px]"
          />
          <p className="text-xl font-bold text-[#0A2735]">
            Valenta Learning Academy
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <div className="flex gap-4 font-bold me-2">
            <Link to="/" smooth={true} duration={500} className="cursor-pointer hover:text-orange-600 transition-transform duration-150">Home</Link>
            <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-orange-600 transition-transform duration-150">Features</Link>
            <Link to="courses" smooth={true} duration={500} className="cursor-pointer hover:text-orange-600 transition-transform duration-150">Courses</Link>
            <Link to="instructors" smooth={true} duration={500} className="cursor-pointer hover:text-orange-600 transition-transform duration-150">Instructors</Link>
          </div>
          {!currentStudent ? (
            <>
              <Button
                btnText="SignIn"
                icon="signin"
                variant="orange"
                btnSize="sm"
                onclick={() => {
                  navigate("/signin");
                }}
              />
              <Button
                btnText="SignUp"
                icon="signup"
                variant="orange"
                btnSize="sm"
                onclick={() => {
                  navigate("/signup");
                }}
              />
            </>
          ) : (
            <div className="relative">
            <IoMenuSharp className="text-xl cursor-pointer" onClick={toggleDropdown}/>
            {
              isDropDownOpen && (
                <div className="bg-[#666666] text-white p-3 flex flex-col gap-1 absolute top-6 right-1 w-[170px] rounded border-1 border-[#FF5400]">
                  <p className="px-3 py-1 font-semibold cursor-pointer hover:bg-[#8c8c8c]" onClick={()=>{navigate("/enrolled")}}>Your Courses</p>
                  <hr />
                  <p className="bg-red-600 px-3 py-1 font-semibold cursor-pointer hover:bg-red-500" onClick={handleSignout}>SignOut</p>
                </div>
              ) 
            }
              {/* <Button btnText="My Enrolled Courses" variant="orange" btnSize="sm" onclick={()=>{navigate("/enrolled")}}/>
              <Button
                btnText="SignOut"
                icon="signup"
                variant="orange"
                btnSize="sm"
                onclick={handleSignout}
              /> */}
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Header;
