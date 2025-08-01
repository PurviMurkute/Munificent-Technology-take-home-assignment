import { model, Schema } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength : [6, "Password must be atleast 6 characters long"]
    }
}, {
    timestamps: true
});

const Student = model("Student", studentSchema);

export default Student;