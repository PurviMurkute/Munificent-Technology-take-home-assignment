import Student from "../models/Student.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const postSignup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "All fields are required",
    });
  }

  try {
    const isStudentExists = await Student.findOne({ email });

    if (isStudentExists) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Student with this email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
    });

    const savedStudent = await newStudent.save();

    return res.status(201).json({
      success: true,
      data: savedStudent,
      message: "SignUp Successful",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: null,
      message: e?.message,
    });
  }
};

const postSignIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "All fields are required",
    });
  }

  try {
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);

    if(!isPasswordValid){
        return res.status(400).json({
            success: false,
            data: null,
            message: "Invalid email or password"
        })
    }

    student.password = undefined;

    const jwtToken = jwt.sign(
        {
            id : student._id,
            email: student.email
        },
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    )

    return res.status(201).json({
        success: true,
        data: student,
        jwtToken,
        message: "SignIn Successful"
    })
  } catch (e) {
    return res.status(400).json({
      success: false,
      data: null,
      message: e?.message,
    });
  }
};

export { postSignup, postSignIn };
