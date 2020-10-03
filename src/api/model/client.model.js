import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    firstname :{
        type : String,
        required : true,
    }, 
    lastname :{
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    }
});
export default mongoose.model('Client',ClientSchema);