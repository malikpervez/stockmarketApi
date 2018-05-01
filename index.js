const express = require('express');
const port = process.env.PORT || 4200;
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);

var alphaVantageApiKey = "PKPB4LE3EE3YKT4V";

app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/views/'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
        res.render('home/home');
});

app.get('/apple', function(req,res){
  res.render('apple/apple');
})

app.get('/amazon', function(req,res){
  res.render('amazon/amazon')
})

app.get('/microsoft', function(req,res){
  res.render('microsoft/microsoft');
})

app.get('/tesla', function(req,res){
  res.render('tesla/tesla')
})

app.get('/facebook', function(req,res){
  res.render('facebook/facebook')
})

app.listen(port, () => {
    console.log('Server listening on port ' + port + '…');
})
