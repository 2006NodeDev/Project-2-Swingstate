/***************************************************************************
 **  When a poll gets updated, pubsub needs to send a message out to the  **
 **  users that want the update according to the threshold they set and   **
 **  the state that got updated.                                          **
****************************************************************************/

//import { createTransport } from 'nodemailer';
let nodemailer = require('nodemailer');


const transporter = createTransport({
  service: 'gmail',
  auth: {
    user:process.env['EMAIL'],      
    pass:process.env['PASSWORD']   
  }
});

  //need to add code that gives the poll resuts
  const messageTemplate = {
    from: process.env['EMAIL'],
    to: '',
    subject: 'Your Poll Has Been Updated',
    text: 'Hello! Please log in to Swing State to see your updated results.'
  }

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.newPollUpdateEmail = (event, context) => {
  const message = event.data ? Buffer.from(event.data, 'base64').toString() : 'Howdy World';
    console.log(message)    
} 

 /*
export function newPollUpdateEmail(event, context){
    let newPollUser = JSON.parse(Buffer.from(event.data, 'base64').toString());
    messageTemplate.to = newPollUser.email;
    transporter.sendMail(messageTemplate.to);
}*/



 //for testing the function by mimicing a pub event
 //Everything below should be deleted or commented out for production.
 let payload = {
     username:'Laura',
     jobTitle:'Associate',
     email:'node2006@lsquaredmath.us'
 }
//to mimic the event
 let event = {
     data: Buffer.from(JSON.stringify(payload), 'binary')
 }
 exports.newPollUpdateEmail(event);

