import Questions from "../models/questionSchema.js";
// import questions,{ answers } from '../database/data.js'

/** Get all questions */
export async function getAllQuestions(req,res){
    try {
            const q= await Questions.find();
            res.json(q);
    } catch (error) {
        res.json('Error:'+error);
    }
}

/** get question by topic name */
export async function getQuestions(req, res) {
    try {
        const sub = req.params.subject;
        const subject=sub.toLowerCase();
        console.log(subject)

        const questions = await Questions.find({ topic: subject });
        if (questions.length === 0) {
            return res.status(404).json({ error: 'No questions found for the given topic.' });
        }

        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}


/** insert all questions */
export async function insertQuestions(req,res){
    try {
          await  Questions.insertMany(req.body),
            res.json({ msg: "Data Saved Successfully...!" });

    } catch (error) {
        res.json('Error:'+error );

    }
}

/** Delete all questions */
export async function dropQuestions(req,res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Data deleted Successfully...!" });

    } catch (error) {
        res.json('Error:'+error );
    }

}



