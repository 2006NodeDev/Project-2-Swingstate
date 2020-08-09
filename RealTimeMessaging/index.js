var twilio = require('twilio');

// sid and auth token in your Twilio account Console.
var client = new twilio(process.env['TWILIO_ACCOUNT_SID'], process.env['TWILIO_AUTH_TOKEN']); //make these environmental variable


// Send the text message.
client.messages.create({
  to: process.env['TO_PHONE_NUMBER'],
  from: process.env['FROM_PHONE_NUMBER'],
  body: 'Test Run - Election Results are up!'
});