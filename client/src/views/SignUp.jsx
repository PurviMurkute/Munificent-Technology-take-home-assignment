import React, { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        {
          name: student.name,
          email: student.email,
          password: student.password,
        }
      );
      if(response.data.success){
        setStudent(response.data.data);
        toast.success(response.data.message);
        setStudent({
            name: "",
            email: "",
            password: ""
        })
      }else{
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message || e?.message);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#0A2735] flex flex-col justify-center items-center inset-0 absolute">
        <div className="w-[450px] bg-[#fff] p-10 rounded-md shadow ">
          <h1 className="text-center font-bold py-4">SignUp Now</h1>
          <form className="flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Name"
              value={student.name}
              onchange={(e) => setStudent({ ...student, name: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Email"
              value={student.email}
              onchange={(e) => setStudent({ ...student, email: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={student.password}
              onchange={(e) =>
                setStudent({ ...student, password: e.target.value })
              }
            />
            <Button btnText="SignUp" variant="orange" btnSize="sm" onclick={signUp}/>
          </form>
          <p className="font-medium p-2">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>navigate("/signin")}>SignIn Now</span></p>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default SignUp;
