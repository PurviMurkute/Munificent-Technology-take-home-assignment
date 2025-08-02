import { FaChalkboardTeacher } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const CourseCard = ({
  _id,
  title,
  thumbnail,
  description,
  instructor,
  duration,
  isCourseAlreadyEnrolled,
}) => {
  const [currentStudent, setCurrentStudent] = useState({});
  const [isEnrolled, setIsEnrolled] = useState(isCourseAlreadyEnrolled);
  const navigate = useNavigate();

  useEffect(() => {
    const studentFromLC = JSON.parse(localStorage.getItem("currentStudent"));

    if (studentFromLC) {
      setCurrentStudent(studentFromLC);
    }
  }, []);

  const enrollCourse = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/enroll/${_id}`,
        {
          studentId: currentStudent?._id,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("JwtToken")
            )}`,
          },
        }
      );

      if (response.data.success) {
        setIsEnrolled(true);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message || e?.message);
    }
  };

  const handleEnroll = async () => {
    if (currentStudent && currentStudent._id) {
      await enrollCourse();
      navigate("/enrolled");
    } else {
      toast.error("Please sign up to enroll");
    }
  };

  return (
    <div className="md:w-[400px] bg-[#fff] p-5 rounded-md shadow">
      <img
        src={thumbnail}
        alt="course-img"
        className="w-full block mx-auto object-cover"
      />
      <h3 className="font-medium py-1">{title}</h3>
      <p className="py-1 text-sm">{description}</p>
      <h4 className="py-1">
        <FaChalkboardTeacher className="inline text-xl me-2" />
        {instructor}
      </h4>
      <h5 className="pb-2">
        <CgCalendarDates className="inline text-xl me-2" />
        {duration}
      </h5>
      <button
        className={`px-4 py-1 border-none rounded-md font-medium my-2 text-white bg-[#FF5400] w-full ${
          isEnrolled
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
        onClick={handleEnroll}
        disabled={isEnrolled}
      >
        {isEnrolled ? "Already Enrolled" : "Enroll Now"}
      </button>
      <Toaster />
    </div>
  );
};

export default CourseCard;
