import mongoose, { Schema }  from "mongoose";

const formSchema=new Schema({
    email:String,
    firstname:String,
    lastname:String,
    subject:String,
    mobile:Number,
    message:String,
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Form=mongoose.model('form',formSchema)

export default Form