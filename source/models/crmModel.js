import mongoose from "mongoose";

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
    firstName:{
        type:String,
        required:"Provide First Name"
    },
    lastName:{
        type:String,
        required:"Provide First Name"
    },
    email:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:Number
    },
    created_date:{
        type:Date,
        default:Date.now
    }

})