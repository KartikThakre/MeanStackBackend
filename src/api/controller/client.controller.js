import Joi from 'joi';
import  Client  from '../model/client.model';
import HttpStatus, { INTERNAL_SERVER_ERROR } from 'http-status-codes';


export default{
   create(req,res){ 
        const schema = Joi.object().keys({                      //useing the Joi middleware for validation
            firstname : Joi.string().required(),
            lastname  : Joi.string().required(),
            email : Joi.string().email().required(), 
              
        });
        const {error, value} = Joi.validate(req.body,schema);
        if(error && error.details){
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
        Client.create(value)
        .then(client =>res.json(client))
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

     findAll(req,res){
        const client = Client.find()
       .then(client => res.json(client))                               
       .catch(err =>res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));       
    },

    findOne(req,res){
        const {id} = req.params;
        Client.findById(id)
        .then(client =>{
            if(!client){
                return res.status(HttpStatus.NOT_FOUND).json({err: 'Could not find any Client'});
            }
            return res.json(client);
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

     delete(req,res){
        const {id} = req.params;
        Client.findByIdAndRemove(id)
        .then(client =>{
            if(!client){
                return res.status(HttpStatus.NOT_FOUND).json({err: 'Could not delete any Client'});
            }
            return res.json(client);
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

     update(req,res){
        const {id} = req.params;
        const schema = Joi.object().keys({                      
            firstname : Joi.string().optional(),
            lastname  : Joi.string().optional(),
            email : Joi.string().email().optional()        
        });
        const {error, value} = Joi.validate(req.body,schema);
        if(error && error.details){
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
        Client.findOneAndUpdate({_id:id},req.body,{new :true})
        .then(client =>res.json(client))
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    }
};
