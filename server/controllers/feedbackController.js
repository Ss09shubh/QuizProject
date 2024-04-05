import Feedback from "../models/feedbackSchema.js";

/** get feedback by name */
export async function getOneFeedback(req, res) {
  try {
    const username = req.params.name;
    const user = await Feedback.findOne({ username });
    if (user) {
      res.json(user);
    } else {
      res.json("no record exist ");
    }
  } catch (error) {
    res.json({ Error: error });
  }
}

/** get all users feedback */
export async function getFeedback(req, res) {
  try {
    const users = await Feedback.find();
    res.json(users);
  } catch (error) {
    res.json({ Error: error });
  }
}

/** post feedback */
export async function postFeedback(req, res) {
  try {
    const { username, feedback } = req.body;
    if (!username || !feedback) {
      return res.json({ error: "Username and feedback are required." });
    } 
      const feed = new Feedback(
        {
            username,
            feedback
        });
      const savedFeedback=await feed.save()
        res.json({ msg: "feedback saved sucessfully", data: savedFeedback });
      
    
  } catch (error) {
    console.log(error)
    res.json({ "Error": error });
  }
}

export default async function deleteOneFeedback(req,res,username){
    try {
       const user= await Feedback.findOneAndDelete({ username })
       res.json({"msg":"feedback deleted sucessfully","data":user})

    } catch (error) {
        res.json({ "Error": error });

    }

}
