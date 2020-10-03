import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    // local:{
    email:{
        type : String,
        required : true,
        lowercase : true,
        unique :true,
    },
    password:{
        type : String,
        required :true,
    },

    // local: {
    //     email: String,
    //     password: String,
    //   },
    //   google: {
    //     email: String,
    //     id: String,
    //     displayName: String,
    //     token: String,
    //   },
});

UserSchema.pre('save', async function(){        //this function used for providing a default password 
//this.password = "AbbuZadda";
if(this.isModified('password') || this.isNew){      //if user is modified or its new
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(this.password,salt);    //its provideing the HashCode on passwaord field
    this.password = hash;
}
});


export default mongoose.model('User',UserSchema);