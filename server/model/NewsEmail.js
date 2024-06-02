import mongoose, { Schema } from "mongoose";

const newsSchema=new Schema({
    email:String
})

const News=mongoose.model('news',newsSchema)

export default News