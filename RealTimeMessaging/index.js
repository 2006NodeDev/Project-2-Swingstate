var twilio = require('twilio');

// sid and auth token in your Twilio account Console.
var client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN'); //make these environmental variable


// Send the text message.
client.messages.create({
  to: '+1phonenumber',
  from: '+1phonenumber',
  body: 'Test Run - Election Results are up!'
});

