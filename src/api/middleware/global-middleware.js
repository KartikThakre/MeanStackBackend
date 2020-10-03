import logger from 'morgan';
import swaggerui from 'swagger-ui-express';
import swaggerDocument from '../../api/config/swagger.json';
import cors from 'cors';
import {router} from '../../api/config/route';
import passport from 'passport';
import express from 'express';
import {configureJWTStrategy}  from '../middleware/passport-jwt';
const app = express();


export const setglobalMiddleware = app =>{


app.use(express.json());
app.use(express.urlencoded({extended : true}));

//useing cors to backend for getting req from backend to frontend & prevent croossorigin pblm form browser  
app.use(cors());

//useing httprequest useing morgan middleware
app.use(logger('dev'));
//For Route Purpose
app.use('/api',router);

//useing passport 3rd party middleware for authentication
app.use(passport.initialize());

//Useing Passport-jwt for Authentication
configureJWTStrategy();


//useing swagger middleware
app.use('/api-docs',swaggerui.serve, swaggerui.setup(swaggerDocument,{
    explorer : true
}));
};

