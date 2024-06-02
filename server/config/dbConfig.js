import mongoose from "mongoose";

export default async function ConnectToDb(){
    try {
     
       await mongoose.connect("mongodb+srv://momhomesid:JsDsA5SEihnecDun@cluster0.wnpdos4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/momhomes")
        console.log("Connected To Db Successfull")
    } catch (error) {
        console.log(error)
    }
}