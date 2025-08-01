import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import CourseCard from "../components/CourseCard";

const Home = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/courses`
      );

      if (response.data.success) {
        setCourses(response.data.data);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e?.response.data.message || e?.message);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A2735]">
      <Header />
      <div className="flex flex-col justify-center items-center inset-0 absolute">
        <h1 className="text-2xl font-extrabold py-5 text-white">Our Courses</h1>
        <div className="flex gap-3 flex-wrap">
          {courses.map((course, i) => {
            const { title, thumbnail, description, instructor, duration } =
              course;
            return (
              <CourseCard
                key={i}
                thumbnail={thumbnail}
                title={title}
                description={description}
                instructor={instructor}
                duration={duration}
              />
            );
          })}
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Home;
