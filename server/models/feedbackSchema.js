import mongoose from 'mongoose';
import { Schema }  from 'mongoose';

/** feedback schema */
const feedbackModel=new Schema({
    username:String,
    feedback:String

});

export default mongoose.model('feedback',feedbackModel);