import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";

const EnrolledCourses = () => {
  const [currentStudent, setCurrentStudent] = useState({});
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const studentFromLC = JSON.parse(localStorage.getItem("currentStudent"));

    if (studentFromLC) {
      setCurrentStudent(studentFromLC);
    }
  }, []);
  const navigate = useNavigate();
  const JWT = JSON.parse(localStorage.getItem("JwtToken"));
  console.log(currentStudent?._id);

  const enrolledCourses = async () => {

    if(!currentStudent._id) return;
    
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/enrollments/${currentStudent?._id}`,
        {
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setEnrollments(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message || e?.message);
    }
  };

  useEffect(() => {
    if (currentStudent) {
      enrolledCourses();
    }
  }, [currentStudent]);
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#d9d9d9]">
        <h1 className="text-2xl font-extrabold py-5 text-[#0A2735] mt-10 text-center">
          Your Enrolled Courses {currentStudent.name} 
        </h1>
        {enrollments.length === 0 ? (
          <>
          <p className="text-2xl font-bold text-red-500 py-5">No courses enrolled yet</p>
          <Button btnText="Enroll Now" variant="orange" onclick={()=>{navigate("/")}} />
          </>
        ) : (
          <div className="flex gap-3 px-2 py-3 flex-wrap justify-center">
            {enrollments.map((course, i) => {
              const {_id,  title, thumbnail, description, instructor, duration } =
                course;
              return (
                <CourseCard
                  _id={_id}
                  key={i}
                  thumbnail={thumbnail}
                  title={title}
                  description={description}
                  instructor={instructor}
                  duration={duration}
                  isCourseAlreadyEnrolled={true}
                />
              );
            })}
          </div>
        )}
      </div>
      <Footer/>
      <Toaster />
    </>
  );
};

export default EnrolledCourses;
