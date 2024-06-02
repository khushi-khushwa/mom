import Form from "../model/Form.js";

export default async function formcontroller(req,res){
    const {fname,lname,email,subject,mobile,message}=req.body;
    const newForm=await Form.create({
        firstname:fname,
        lastname:lname,
        email:email,
        mobile:mobile,
        subject:subject,
        message:message
    })

    await newForm.save;

    return res.json({message:"Sent Success",success:true})
}
