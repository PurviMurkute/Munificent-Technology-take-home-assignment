import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import CourseCard from "../components/CourseCard";
import homeImg from "../assets/homeimg.png";
import Button from "../components/Button";
import featuresData from "../components/FeaturesData";
import Features from "../components/Features";
import instructorsData from "../components/InstructorsData";
import InstructorsCard from "../components/InstructorsCard";
import Footer from "../components/Footer";
import { Link } from "react-scroll";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});

  useEffect(() => {
    const currentstudent = JSON.parse(localStorage.getItem("currentStudent"));

    if (currentstudent) {
      setCurrentStudent(currentstudent);
    }
  }, []);

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
    <>
      <Header />
      <div id="home" className="h-[600px] bg-[#0A2735] mt-10 relative">
        <div className="flex justify-center items-center gap-5 inset-0 mx-auto w-[75%] absolute">
          <div className="">
            <h2 className="text-3xl font-extrabold text-[#fff] my-3">
              Build Real Skills for Real Opportunities
            </h2>
            <p className="text-white font-sans text-md mt-2 mb-5">
              Go beyond theory - our hands-on courses help you apply knowledge
              in real-world scenarios. Learn by doing, and gain the confidence
              to turn skills into success.
            </p>
            <Link to="courses" smooth={true} duration={500}>
              <Button
                btnText="Explore Our Courses"
                variant="orange"
                icon="explore"
                btnSize="md"
              />
            </Link>
          </div>
          <div className="">
            <img src={homeImg} alt="Homg-img" className="w-[700px]" />
          </div>
        </div>
      </div>
      <div id="features" className="bg-[#fff] p-15">
        <h2 className="text-center text-2xl font-bold text-[#0A2735]">
          Our Features
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {featuresData.map((feature, i) => {
            const { title, description, icon } = feature;
            return (
              <Features
                key={i}
                title={title}
                description={description}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
      <div id="courses" className="bg-[#d9d9d9] p-10">
        <h1 className="text-2xl font-extrabold py-5 text-[#0A2735] text-center">
          Our Courses
        </h1>
        <div className="flex gap-3 flex-wrap justify-center">
          {courses.map((course, i) => {
            const {
              _id,
              title,
              thumbnail,
              description,
              instructor,
              duration,
              students,
            } = course;
            return (
              <CourseCard
                _id={_id}
                key={i}
                thumbnail={thumbnail}
                title={title}
                description={description}
                instructor={instructor}
                duration={duration}
                isCourseAlreadyEnrolled={students.includes(currentStudent?._id)}
              />
            );
          })}
        </div>
      </div>
      <div id="instructors" className="bg-[#fff] p-10">
        <h2 className="text-2xl font-extrabold py-5 text-[#0A2735] text-center">
          Our Instructors
        </h2>
        <div className="flex gap-3 flex-wrap justify-center">
          {instructorsData.map((instructor, i) => {
            const { image, name, email } = instructor;

            return (
              <InstructorsCard
                key={i}
                image={image}
                name={name}
                email={email}
              />
            );
          })}
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default Home;
