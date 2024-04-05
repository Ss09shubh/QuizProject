import mongoose from "mongoose";
const { Schema }=mongoose;

/**  result model */
const resultModel =new Schema({
    username : { type : String},
    obtainedMarks : { type : Array,default : []},
    totalMarks: { type : Number,default : 100},
    achived: { type : String,default : ''},
    createdAt: { type : Date,default : Date.now}


})

export default mongoose.model('result',resultModel);
