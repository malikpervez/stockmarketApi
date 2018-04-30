const express = require('express');
const port = process.env.PORT || 4200;
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
var request = require('request-promise');
var alphaVantageApiKey = "PKPB4LE3EE3YKT4V";

app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/views/'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//ignore commented out lines due to api failure.

app.get('/stocks', function (req, res) {

    // This specifies the company for which
    // to retrieve the stock history
    // var symbol = req.query.symbol;
    // if (!symbol) {
    //     throw new Error("Symbol not specified.");
    // }
    //
    // var baseUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
    // var url = baseUrl  + symbol + '&apikey=' + alphaVantageApiKey + '&datatype=csv';
    // request(url) // Send request to Alpha Vantage.
    //     .then(function (result) {
    //         res.set('Content-Type', 'text/csv');
    //         res.send(result).end(); // Send CSV data to the browser.
    //     })
    //     .catch(function (e) {
    //         console.error(e)
    //         res.sendStatus(500); // Error result.
    //     });
        res.render('home/home');
});

app.get('/apple', function(req,res){
  res.render('apple/apple');
})

app.get('/amazon', function(req,res){
  res.render('amazon/amazon')
})

app.get('/microsoft', function(req,res){
  res.render('microsoft');
})

app.get('/tesla', function(req,res){
  res.render('tesla/tesla')
})

app.get('facebook', function(req,res){
  res.render('facebook/facebook')
})

app.listen(port, () => {
    console.log('Server listening on port ' + port + '…');
})
