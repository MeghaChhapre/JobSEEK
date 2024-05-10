import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title"],
    minlength: [3, "Job title must contain atleast 3 character"],
    maxlength: [50, "Job title cannot exceed 50 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide job description"],
    minlength: [3, "Job description must contain atleast 3 character"],
    maxlength: [350, "Job description cannot exceed 350 characters"],
  },
  category: {
    type: String,
    required: [true, "Please provide job category"],
    
  },
  country: {
    type: String,
    required: [true, "Please provide job country"],
  },
  city: {
    type: String,
    required: [true, "Please provide job city"],
  },
  location: {
    type: String,
    required: [true, "Please provide job title"],
    minlength: [10, "Job location must contain atleast 10 character"],
  },
  fixedSalary: {
    type: Number,
    minlength: [4, "Fixed Salary must contain atleast 4 digits"],
    maxlength: [9, "Fixed Salary cannot exceed 9 digits"]
  },
  salaryFrom: {
    type: Number,
    minlength: [4, "Salary must contain atleast 4 digits"],
    maxlength: [9, "Salary cannot exceed 9 digits"]
  },
  salaryTo: {
    type: Number,
    minlength: [4, "Salary must contain atleast 4 digits"],
    maxlength: [9, "Salary cannot exceed 9 digits"]
  },
  expired:{
    type: Boolean,
    dafault: false
  },
  jobPostedOn:{
    type: Date,
    default: Date.now,
  },
  postedBy:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);




//1:58:56