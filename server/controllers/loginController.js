import User from '../models/userSchema.js'


/**  login  */

export async function login(req,res){
    const {email,password}=req.body;
    User.findOne({email:email}).then(user=>{
        if(user)
        {
            if(user.password===password){
                res.json({msg:"Sucess","user":user});
                console.log(user);
            } else{
                res.json("the password is incorrect")
            }
        }else{
                res.json("No record existed")
        }

    })

            
}
