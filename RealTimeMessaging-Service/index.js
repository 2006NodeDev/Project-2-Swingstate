var twilio = require('twilio');

// sid and auth token in your Twilio account Console.
var client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
//var client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');



// Send the text message.
client.messages.create({
  to: '+1xxxx',
  from: '+1xxxxxxx',
  body: 'Test Run - Election Results are up!'
});


