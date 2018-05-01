Plotly.d3.csv('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=PKPB4LE3EE3YKT4V&datatype=csv', function(err, rows){

function unpack(rows, key) {
  return rows.map(function(row) {
    return row[key];
  });
}

var trace = {
  x: unpack(rows, 'timestamp'),
  close: unpack(rows, 'open'),
  high: unpack(rows, 'high'),
  low: unpack(rows, 'low'),
  open: unpack(rows, 'close'),

  // cutomise colors
  increasing: {line: {color: '#17BECF'}},
  decreasing: {line: {color:'#7F7F7F'}},

  type: 'candlestick',
  xaxis: 'x',
  yaxis: 'y'
};

var data = [trace];

var layout = {
  title: 'Apple',
  dragmode: 'zoom',
  showlegend: false,
  xaxis: {
    rangeselector: {
        x: 0,
        y: 1.2,
        xanchor: 'left',
        font: {size:8},
        buttons: [{
            step: 'month',
            stepmode: 'backward',
            count: 1,
            label: '1 month'
        }, {
            step: 'month',
            stepmode: 'backward',
            count: 6,
            label: '6 months'
        }, {
            step: 'all',
            label: 'All dates'
        }]
      },
    rangeslider: {
		 visible: false
	 }
  }
};

Plotly.plot('apple', data, layout);
});


//Line graph
Plotly.d3.csv("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=PKPB4LE3EE3YKT4V&datatype=csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL High',
  x: unpack(rows, 'timestamp'),
  y: unpack(rows, 'high'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'timestamp'),
  y: unpack(rows, 'low'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Trend Overtime',
};

Plotly.newPlot('apple__line', data, layout);
})


//OHLC GRAPH
Plotly.d3.csv("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=PKPB4LE3EE3YKT4V&datatype=csv", function(err, rows){

function unpack(rows, key) {
  return rows.map(function(row) {
    return row[key];
  });
}

var trace = {
  x: unpack(rows, 'timestamp'),
  close: unpack(rows, 'close'),
  high: unpack(rows, 'high'),
  low: unpack(rows, 'low'),
  open: unpack(rows, 'open'),

  // cutomise colors
  increasing: {line: {color: '#17BECF'}},
  decreasing: {line: {color: '#7F7F7F'}},

  type: 'ohlc',
  xaxis: 'x',
  yaxis: 'y'
};

var data = [trace];

var layout = {
  title: 'Open-High-Low-Close',
  dragmode: 'zoom',
  showlegend: false,
  xaxis: {
    rangeslider: {
		 visible: false
	 }
  }
};

Plotly.plot('apple__ohlc', data, layout);
});
