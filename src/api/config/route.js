import express from 'express';
import invoiceController from '../controller/invoice.controller';
import clientController from '../controller/client.controller';
import userController from '../controller/user.controller';
import passport from 'passport';
export const router = express.Router(); 


//Invoices
router.get('/invoices',invoiceController.findAll);
router.get('/invoices/:id', invoiceController.findOne);
router.delete('/invoices/:id', invoiceController.delete);
router.put('/invoices/:id', invoiceController.update);
router.post('/invoices', invoiceController.create);

//Client
router.post('/client',clientController.create);
router.get('/client' ,clientController.findAll);
router.get('/client/:id', clientController.findOne);
router.delete('/client/:id',clientController.delete);
router.put('/client/:id', clientController.update);

//User
router.post('/user/signup',userController.signup);
router.post('/user/login',userController.login);
router.post('/user/forgot-password',userController.forgotpassword);
router.post('/user/test',passport.authenticate('jwt',{session:false}),userController.test); //for restict the All tha API
