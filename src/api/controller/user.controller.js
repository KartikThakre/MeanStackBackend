import Joi from 'joi';
import  User  from '../model/user.model';
import HttpStatus, { INTERNAL_SERVER_ERROR, BAD_REQUEST, UNAUTHORIZED, NOT_FOUND } from 'http-status-codes';
import bcryptjs from 'bcryptjs';
import userService from '../service/user.service';
import jwt from 'jsonwebtoken';
import { devConfig } from '../config/env/development';
import { getJWTToken } from '../modules/util';



export default{
    signup(req,res){ 
        const schema = Joi.object().keys({                      //useing the Joi middleware for validation
            email : Joi.string().email().required(), 
            password  : Joi.string().required(),      
        });
        const {error, value} = Joi.validate(req.body,schema);
        if(error && error.details){
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
        User.create(value)
        .then(res.json({Success :true,message : "User created Successfully"}))
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

  async login(req,res){
      try{
    const {error, value} = userService.validateSchema(req.body);
    if(error && error.details){
        return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
        const user = await User.findOne({email : value.email});
        if(!user){
            return res.status(HttpStatus.BAD_REQUEST).json({err : 'Invalid User Or Password'})
        }
        const matched = await bcryptjs.compare(value.password , user.password);
        if(!matched)
        {
            return res.status(UNAUTHORIZED).json({err : 'Invalid Credentials'});
        }
        const token = jwt.sign({id :user._id},devConfig.secret,{expiresIn : '1d'});
        return res.json({Success:true, token});
    }catch(err){
        console.error(err);
        return res.status(INTERNAL_SERVER_ERROR).json(err);

    } 
   },
   async test(req,res){
       return res.json(req.user);
   },

   async forgotpassword(req,res){
       try{
        const {error, value} = userService.validateForgotSchema(req.body);
        if(error && error.details){
            return res.status(HttpStatus.BAD_REQUEST).json(error)
            }

        const criteria = {
            $or:[
                // {'google.email' : value.email},
                {'local.email' : value.email}
            ]
       };
        
        const user = await User.findOne(criteria);
        if(!user){

            console.log("hello i am here");
            debugger;
            return res.status(NOT_FOUND).json({err : 'Could not find User'});
        }

        const token = getJWTToken({id : user._id});

        const resetLink = `
        <h4> please click on thr link to reset the Password</h4>

        <a href = '${devConfig.frontendURL}/reset-password/${token}'>Reset Password</a>
        `;

        const senitizeduser = userService.getUser(user);
        const results = await sendEmail({
            html: resetLink,
            subject: 'Forgot Password',
            email: senitizeduser.email,
        });
        return res.json(results);
    }catch(err){
        console.error(err);
        return res.status(INTERNAL_SERVER_ERROR).json(err);
       }

   }
};