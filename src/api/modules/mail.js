import  nodemailer  from 'nodemailer';
import  htmltoText  from 'html-to-text';
import { devConfig } from '../config/env/development';

export const sendEmail = options =>{
     new Promise((resolve,reject) => {
        const transporter = nodemailer.createTransport({
            host : devConfig.ethereal.host,
            port : devConfig.ethereal.port,
            auth : 
            {
                user : devConfig.ethereal.username,
                password : devConfig.ethereal.password
            }, 
        });
        const text = htmltoText.fromString(options.html,{
            wordwrap : 130,
        });
        const mailOptions = {
            from : 'kartikthakre24@gmail.com',
            to : 'thakrekartik92@gmail.com',
            subject : options.subject,
            text,
            html : options.html,
        };
        transporter.sendMail(mailOptions,(error, info) =>{
            if(error){
                return reject(error);
            }
            console.log('Message id' ,info.messageId);
            console.log('Preview URL' ,nodemailer.getTestMessageUrl(info));
            return resolve({message : 'Reset Email has sent to your inbox'});
        });

    });

}