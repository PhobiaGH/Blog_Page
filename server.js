// Check if running on production server, of not connects to local host port 9999
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

// Brings in packages needed for server to run
const express = require('express');
const app = express();
const expressSanitizer = require('express-sanitizer');
const cookieParser = require('cookie-parser');

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cookieParser());
app.use(expressSanitizer());

// Sets view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

// Tells the sever what port to listen on
app.listen(process.env.PORT || 9999, function() {
    console.log('Express listenig on port', this.address().port);
});