import { Routes, Route } from "react-router"
import Home from "./views/Home"
import SignIn from "./views/SignIn"
import SignUp from "./views/SignUp"
import EnrolledCourses from "./views/EnrolledCourses"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/enrolled" element={<EnrolledCourses/>}></Route>
      </Routes>
    </>
  )
}

export default App
