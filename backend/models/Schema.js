import mongoose from "mongoose";
import validator from "validator";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,"This should be minimum 3 characters"]
        
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"This should be minimum 3 characters"]
    },
    phone:{
        type:String,
        required:true,
        minlength:[11,"phone number should contain 11 digits"],
        maxlength:[11,"phone number should contain only 11 digits"],
    },
    time:{
        type:String,
    },
    date:{
        type:String,
    }
  });
  
  
  
  const User = mongoose.model('user', userSchema);
  export default User
  