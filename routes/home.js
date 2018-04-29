var router = require('express').Router();

const stockApi = 'PKPB4LE3EE3YKT4V';
var intraDay = 'TIME_SERIES_INTRADAY'


router.get("/", function(req, res) {
  var request = require('request');
    request('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey='+stockApi, function (error, response, body) {
    var json = JSON.parse(body)
      if (error) {
        console.log(error)
      } else {
        console.log("data recieved")
      }
    });
    res.render("home/home",);
});
module.exports = router;
