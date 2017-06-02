var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;
const IPv4 = '172.20.160.80';

// app.use(function(req, res, next) {
//     if (req.headers['x-forwarded-proto'] === 'http') {
//         next();
//     } else {
//         res.redirect('http://' + req.hostname + req.url);
//     }
// });

app.use(express.static('public'));

app.listen(PORT, IPv4, function() {
    console.log('Express server is up on port ' + PORT);
});