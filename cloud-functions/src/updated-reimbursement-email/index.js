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
  subject: 'Your polling threshold has been exceeded',
  text: 'Hello, one of your tracked states have recieved a new poll that exceeds your set threshold. Log in to your account to view the change. Thank you.'
}

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.updatedReimbursementEmail = (event, context) => {

  let updatedReimbursement = JSON.parse(Buffer.from(event.data, 'base64').toString())

  messageTemplate.to = newAlert.email

  transporter.sendMail(messageTemplate)
};