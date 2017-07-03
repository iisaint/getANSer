var express = require('express');
var RateLimit = require('express-rate-limit');
var morgan = require('morgan');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// app.use(function(req, res, next) {
//     if (req.headers['x-forwarded-proto'] === 'http') {
//         next();
//     } else {
//         res.redirect('http://' + req.hostname + req.url);
//     }
// });

app.use(morgan('short'));

// var limiter = new RateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes 
//     max: 10, // limit each IP to 100 requests per windowMs 
//     delayMs: 0 // disable delaying - full speed until the max limit is reached 
// });
// //  apply to all requests 
// app.use(limiter);

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});