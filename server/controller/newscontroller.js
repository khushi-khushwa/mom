import News from "../model/NewsEmail.js";

export default async function newscontroller(req,res){
    const{email}=req.body;

    const existEmail=await News.findOne({email:email})
    if(existEmail)
        {
            return res.json({message:"Already Subscribe",success:false})
        }
        else{
            const newEmail=await News.create({
                email:email
        })

        await newEmail.save();
        return res.json({message:'subscribe done',success:true})
        }
}