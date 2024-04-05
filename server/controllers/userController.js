import User from '../models/userSchema.js';
import Results from '../models/resultSchema.js';
import Feedback from '../models/feedbackSchema.js';
import bcrypt from 'bcrypt';


/** insert user  */
export async function StoreUser(req, res) {

  const { name, email, password,admin} = req.body
  const user = await User.findOne({ email })
    if (user) {
      res.send({ message: 'User Already Registered' })
    } else {
       
      // const saltRounds = 10;
      // const encryptedPassword = await bcrypt.hash(password, saltRounds);
      const user = new User({
        name,
        email,
        password,
        admin
      })
      user.save().then((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: 'Successfully Registered',user })
        }
      })
    }
  
}

/** get user  */
export async function getUser(req, res) {
  try {
    const q = await User.find({admin:false});
    res.json(q);
    
  } catch (error) {
    res.json({ "Error": error })
  }
}


/**delete user and his result by name */
export async function deleteUser(req, res) {
  try {
    const { name } = req.params;
    const username=name;
    
    const deletedUser = await User.findOneAndDelete({ name });
    const result=await Results.findOneAndDelete({ username });
    const feed=await Feedback.findOneAndDelete({ username });


    if (deletedUser ) {
      res.json({ message: 'User and his marks deleted successfully', deletedUser,result,feed });
    } else {
      res.json({ message: 'User not found' });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const { name } = req.params;
    const user = await User.findOne({ name });

    if (!user) {
      return res.json({ message: 'User not found' });
    }else{
    // user.name=req.body.name;
    user.email=req.body.email;
    user.password = req.body.password;
    const updatedUser = await user.save();
    return res.json({ message: 'User updated successfully', user: updatedUser });
    }
  } catch (error) {
  
    return res.status(500).json({ error: error.message });
  }
}

