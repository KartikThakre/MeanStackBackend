import express from 'express';
import mongoose from 'mongoose';
import {devConfig} from './api/config/env/development';
import { setglobalMiddleware } from './api/middleware/global-middleware';

//MongoDataBase Connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/${devConfig.database}` , {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
const Port = devConfig.port;

//Register global middleware
setglobalMiddleware(app);



//adding global middleware
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.message = "Invalid Route";
    error.status = 404;
    next(error);
})


//Add BodyParser for undefined body error
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    return res.json({
        error : {
            message : error.message,
        },
    });
});



app.listen(Port , ()=>{
    console.log(`Server is runing at Port ${Port}`);
});


