var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var twilio = require('twilio');

// Twilio Credentials
var accountSid = 'AC7073861fc7460113a38a0a9836bb8918';
var authToken = '88ab9d1f6ef60e0a8bb0845f64836690';

//require the Twilio module and create a REST client
var client = twilio(accountSid, authToken);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile(path.resolve('index.html'));
});

app.listen(4545, function(){
  console.log('server up on 4545');
});

app.post('/sendMessage',function(req,res){
  client.messages.create({
      to: "+1" + req.body.phone,
      from: "+17633163561",
      body: req.body.message,
  }, function(err, message) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      console.log(message.sid);
      res.sendStatus(200);
    }
  });
});
