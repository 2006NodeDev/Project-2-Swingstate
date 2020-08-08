let nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env['EMAIL'],
    pass: process.env['PASSWORD']
  }
})

const messageTemplate = {
  from: process.env['EMAIL'],
  to: '',
  subject: 'Your Reimbursement Has Been Updated',
  text: 'Hello! Your reimbursement has been updated. Log in to your account to see the updates.'
}

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.updatedReimbursementEmail = (event, context) => {

  let updatedReimbursement = JSON.parse(Buffer.from(event.data, 'base64').toString())
  messageTemplate.to = updatedReimbursement.email
  transporter.sendMail(messageTemplate)
};


 //for testing the function by mimicing a pub event
let payload = {
  username:'Laura',
  jobTitle:'Associate',
  email:'node2006@lsquaredmath.us'
}
//to mimic the event
let event = {
  data: Buffer.from(JSON.stringify(payload), 'binary')
}
exports.updatedReimbursementEmail(event);
