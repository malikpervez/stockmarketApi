
$(window).ready(function() {
    //in the layout variable I can add a title attribute and pass the key with a link into it. The issue with this is that plotly will recognize the tag but not point to the route
    var links = {
      'Microsoft':'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=PKPB4LE3EE3YKT4V&datatype=csv',
      'Apple': 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=PKPB4LE3EE3YKT4V&datatype=csv',
      'Tesla':'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=PKPB4LE3EE3YKT4V&datatype=csv',
      'Amazon':'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=PKPB4LE3EE3YKT4V&datatype=csv',
      'Facebook':'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&apikey=PKPB4LE3EE3YKT4V&datatype=csv'
    };

    for (var key in links) {
      (function(key,links){

    //url of the data I am passing
      Plotly.d3.csv(links[key], function(err, rows){

      function unpack(rows, key) {
        return rows.map(function(row) {
          return row[key];
        });
      }
      $('.loader').hide();
      $('.links').show();
      var trace = {
        x: unpack(rows, 'timestamp'),
        close: unpack(rows, 'open'),
        high: unpack(rows, 'high'),
        low: unpack(rows, 'low'),
        open: unpack(rows, 'close'),

        // cutomise colors
        increasing: {line: {color: '#17BECF'}},
        decreasing: {line: {color: '#7F7F7F'}},

        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'
      };

      var data = [trace];

      var layout = {
        label: key,
        autosize: true,
        dragmode: 'zoom',
        showlegend: false,
        xaxis: {
          rangeslider: {
             visible: true
         },
        }
      };
      //this key is the value of the id of the html element
      Plotly.plot(key, data, layout);
      });
      })(key,links)
    }


  });
