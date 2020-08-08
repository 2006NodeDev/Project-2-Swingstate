var twilio = require('twilio');

// sid and auth token in your Twilio account Console.
// var client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN'); make these environmental variable
var client = new twilio('AC749935d62082fdeef360c9138ad18c44', 'f85da8c79e793fe3f82228822d5a997d');


// Send the text message.
client.messages.create({
  to: '+19097148410',
  from: '+15708730263',
  body: 'Test Run - Election Results are up!'
});

