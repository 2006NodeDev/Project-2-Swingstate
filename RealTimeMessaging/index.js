require('dotenv').config()

var twilio = require('twilio');

let username = process.env.TWILIO_ACCOUNT_SID

let token = process.env.TWILIO_AUTH_TOKEN

let toNumber = process.env.TO_PHONE_NUMBER

let fromNumber = process.env.FROM_PHONE_NUMBER

// sid and auth token in your Twilio account Console.
var client = new twilio(username, token); //make these environmental variable


// Send the text message.
client.messages.create({
  to: toNumber,
  from: fromNumber,
  body: 'Test Run - Election Results are up!'
});