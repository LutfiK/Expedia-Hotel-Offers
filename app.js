//importing modules
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const port = 3000;

//adding middleware
app.use(cors());

//bodypaser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

const offersRoute = require('./routes/offers.js');


//routes
app.use('/offers', offersRoute);

//our routes
app.get('/', (req, res) => {
  res.send('Welocome to Hotel Offers API !');
});

app.listen(port, ()=> {
  console.log('server started at port: ' + port);
});
