import Course from "../models/Course.js";

const postCourse = async (req, res) => {
    const { title, thumbnail, description, instructor, duration } = req.body;

    if(!title || !thumbnail || !description || !instructor || !duration){
        return res.status(400).json({
            success: false,
            data: null,
            message: "All fields are required"
        })
    }

    const newCourse = new Course({
        title,
        thumbnail,
        description,
        instructor,
        duration
    });

    try{
        const savedCourse = await newCourse.save();

        return res.status(201).json({
            success: true,
            data: savedCourse,
            message: "Course added successfully"
        })
    }catch(e){
        return res.status(400).json({
            success: false,
            data: null,
            message: e?.message
        })
    }
};

const getCourses = async (req, res) => {
    try{
        const allCourses = await Course.find();

        if(allCourses.length === 0){
            return res.status(400).json({
                success: false,
                data: null,
                message: "No Courses Found"
            })
        }

        return res.status(200).json({
            success: true,
            data: allCourses,
            message: "All courses fetched successfully"
        })
    }catch(e){
        return res.status(400).json({
            success: false,
            data: null,
            message: e?.message
        })
    }
}

export {
    postCourse,
    getCourses
}