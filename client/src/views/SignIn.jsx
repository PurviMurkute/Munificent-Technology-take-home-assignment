import React, { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

const SignIn = () => {
  const [signInStudent, setSignIsStudent] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const SignIn = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/signin`,
        {
          email: signInStudent.email,
          password: signInStudent.password,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("currentStudent", JSON.stringify(response.data.data));
        console.log(response.data.data);
        

        localStorage.setItem("JwtToken", JSON.stringify(response.data.jwtToken)
        );
        setSignIsStudent({
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message || e?.message);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#d9d9d9] flex flex-col justify-center items-center inset-0">
        <div className="md:w-[400px] bg-[#fff] p-4 md:p-10 rounded-md shadow ">
          <h1 className="text-center font-bold py-4">SignIn Now</h1>
          <form className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Email"
              value={signInStudent.email}
              onchange={(e) =>
                setSignIsStudent({ ...signInStudent, email: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="Password"
              value={signInStudent.password}
              onchange={(e) =>
                setSignIsStudent({ ...signInStudent, password: e.target.value })
              }
            />
            <Button btnText="SignIn" variant="orange" btnSize="sm" onclick={SignIn} />
          </form>
          <p className="font-medium p-2">Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>navigate("/signup")}>SignUp Now</span></p>
        </div>
      
      </div>
      <Footer/>
      <Toaster/>
    </>
  );
};

export default SignIn;
