var router = require('express').Router();
var request = require('request-promise');
var alphaVantageApiKey = "PKPB4LE3EE3YKT4V";



router.get("/", function(req, res) {
  // This specifies the company for which
      // to retrieve the stock history
      var symbol = req.query.symbol;
      if (!symbol) {
          throw new Error("Symbol not specified.");
      }
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=PKPB4LE3EE3YKT4V&datatype=csv

      var baseUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
      var url = baseUrl  + symbol + '&apikey=' + alphaVantageApiKey + '&datatype=csv';
      request(url) // Send request to Alpha Vantage.
          .then(function (result) {
              // res.set('Content-Type', 'text/csv');
              // res.send(result).end(); // Send CSV data to the browser.
              res.render('home/home', ({
                data:result
              }))
          })
          .catch(function (e) {
              console.error(e)
              res.sendStatus(500); // Error result.
          });
});
module.exports = router;
