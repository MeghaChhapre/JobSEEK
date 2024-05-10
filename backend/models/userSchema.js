import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "Please provide your name"],
    minLength:[3, "Name must contain atleast 3 characters"],
    maxLength:[30, "Name cannot exceed 30 characters"],
  },
  email : {
    type: String,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Please provide a Valid email"]
  },
  phone : {
    type: Number,
    required : [true, "Please provide your phone number "]
  },
  password : {
    type: String,
    required: [true, "Please provide password"],
    minLength:[3, "Password must contain atleast 3 characters"],
    maxLength:[30, "Password cannot exceed 30 characters"],
    select: false
  },
  role : {
    type: String,
    required: [true, "Please provide your role"],
    enum: ["Job Seeker", "Employer"]
  },
  createdAt : {
    type: Date,
    default: Date.now,
  },

});

//Hashing password
userSchema.pre("save", async function (next) {
  if(!this.isModified("password")){
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//Compairing password
userSchema.methods.comparePassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
};

//Generating JWT token for Authorization
userSchema.methods.getJWTToken = function(){
  return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = mongoose.model("User", userSchema);
