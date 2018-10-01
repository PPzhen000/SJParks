/* Message Outgoing
 * This code creates a new instance of the Message resource 
 * and sends an HTTP POST to the Messages resource URI.
 */
const SubscriptionLog = require('../models/SubscriptionLog');
const messageSender = require('../lib/messageSender');
const cfg = require('../config');
const accountSid = cfg.accountSid;
const authToken = cfg.authToken; 
const client = require('twilio')(accountSid, authToken);

exports.sendMessages = function(request, response) {
  // Get message info from form submission
  // const message = request.body.message;
  // const parkID = request.body.parkID;
    
  // if(!message || !parkID) {
  //     response.send(`
  //       <html>
  //         <head>
  //             <meta name="viewport" content="width=device-width, initial-scale=1">
  //             <title>Admin Dashboard - SJParks</title>
  //             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  //             <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  //             <style>
  //                 body{
  //                     font-family: Ubuntu, sans-serif;
  //                     margin: 30px 20px;
  //                 }
  //             </style>
  //         </head>
  //         <body>
  //             <p>Couldn\'t varify the request.</p> 
  //             <a class="btn" href="/admin">< Back</a>
  //         </body>
  //       </html>`)
  // } else {
  //   // TODO prettify response with message displayed
  //   response.send(` <p>Message was sent</p>  
  //     <a href="/">Go Back</a>`)
  
  //   // Send messages to all users subscribed to parks in Parks
  //   Subscription.find({
  //     park: {$in: parkID},
  //   }).then((users) => {
  //     messageSender.sendMessageToSubscribers(users, message, '');
  //   }).then(() => {
  //     request.flash('successes', 'Messages on their way!');
  //     response.redirect('/admin');
  //   }).catch((err) => {
  //     console.log('err ' + err.message);
  //     request.flash('errors', err.message);
  //     response.redirect('/admin');
  //   });
  // }
};
