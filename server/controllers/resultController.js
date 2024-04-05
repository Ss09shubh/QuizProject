import Results from "../models/resultSchema.js";

/**get all results */
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all results */
export  async function postResult(req, res) {
  try {
    const { username, obtainedMarks, total, achived } = req.body;
    console.log('req.body',req.body)
    if (!username && !obtainedMarks) {
      throw new Error("Data Not Provided.....!");
    } else {
      const result= await Results.findOne({ username })
      if(result)
      {
        
        const marks =result.obtainedMarks;
        console.log('marks',marks)
        const receivedKey = Object.keys(obtainedMarks)?.[0];
        const removeMarks = marks?.filter((i)=> Object.keys(i)?.[0] !== receivedKey);
        const updatedMarks = [obtainedMarks,...removeMarks];
        result.obtainedMarks=updatedMarks;
        result.save().then(()=>{
            res.json("result saved succesfully...")
        })

      }else{
            const resultInstance = new Results({
                username,
                obtainedMarks,
                total,
                achived,
             });
             await resultInstance.save().then(() => {
                res.json({ msg: "Result Saved Sucessfully...!" });
              });
      }

      
    }
 } catch (error) {
    res.json(error);
  }
}


/**delete one results */
export async function dropOneResult(req, res) {
    try {
        const username=req.body;
      await Results.findOneAndDelete({username})
      res.json({ msg: "Result deleted sucessfully....!" });
    } catch (error) {
      res.json({ error });
    }
  }



/**delete all results */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result deleted sucessfully....!" });
  } catch (error) {
    res.json({ error });
  }
}
