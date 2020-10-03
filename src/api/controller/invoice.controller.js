import Joi from 'joi';
import  Invoice  from '../model/invoice.model';
import HttpStatus from 'http-status-codes';

export default{
    findAll(req,res,next){
        const {page = 1, perPage = 10, filter, sortField, sortDir} = req.query;                         //crete option to display records
        const options = {
            page : parseInt(page,10),
            limit : parseInt(perPage,10),
            populate : 'client',
        };
        const query = {};
        if(filter){
            query.item = {
               $regex : filter,
        };
        }                                                               //filter is use to filter the data
        if(sortField && sortDir){                                        //dynamically sort and filter
            options.sort = {                                                        //sort for sorting the data
                [sortField] : sortDir,
             };  
        }
        console.log(options);
        Invoice.paginate(query,options)
       .then(invoice => res.json(invoice))                               //useing paginate() instend of find()
       .catch(err =>res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    create(req,res,next){
    // const error = new Error('Not Found');    //specific URL type middleware to handle the error
    // error.message = "MMAMAMAMA";
    // error.status = 404;
    // next(error);
        const schema = Joi.object().keys({                      //useing the Joi middleware for validation
            item : Joi.string().required(),
            qty  : Joi.number().integer().required(),
            date : Joi.date().required(),
            due  : Joi.date().required(),
            client : Joi.string().required(),
            rate : Joi.number().optional(),
            tax  : Joi.number().optional(),
                
        });
        const {error, value} = Joi.validate(req.body,schema);
        if(error && error.details){
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
        Invoice.create(value)
        .then(invoice =>res.json(invoice))
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
       
        // const {item,qty,date,due,rate,tax} = req.body;
        // if(!item){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'item is required'});         //before use of Joi middleware
        //  }
        // if(!qty){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'qty is required'});      //useing the HTTPstatuscodes
        // }
        // if(!date){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'date is required'});
        // }
        // if(!due){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'due is required'});
        // }
        // if(!rate){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'rate is required'});
        // }
        // if(!tax){
        //     return res.status(HttpStatus.BAD_REQUEST).json({err : 'tax is required'});
        // }
        // Invoice.create({item,qty,date,due,rate,tax})
        // .then(invoice =>res.json(invoice))
        // .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    findOne(req,res){
        const {id} = req.params;
        Invoice.findById(id)
        .then(invoice =>{
            if(!invoice){
                return res.status(HttpStatus.NOT_FOUND).json({err: 'Could not find any invoice'});
            }
            return res.json(invoice);
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    delete(req,res){
        const {id} = req.params;
        Invoice.findByIdAndRemove(id)
        .then(invoice =>{
            if(!invoice){
                return res.status(HttpStatus.NOT_FOUND).json({err: 'Could not delete any invoice'});
            }
            return res.json(invoice);
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },
    update(req,res){
        const {id} = req.params;
        const schema = Joi.object().keys({                      //useing the Joi middleware
            item : Joi.string().optional(),
            qty  : Joi.number().integer().optional(),
            date : Joi.date().optional(),
            due  : Joi.date().optional(),
            rate : Joi.number().optional(),
            tax  : Joi.number().optional(),
            client : Joi.string().optional(),       
        });
        const {error, value} = Joi.validate(req.body,schema);
        if(error && error.details){
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
        Invoice.findOneAndUpdate({_id:id},req.body,{new :true})
        .then(invoice =>res.json(invoice))
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    }
};

















































