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
  increasing: {line: {color: 'black'}},
  decreasing: {line: {color: 'red'}},

  type: 'candlestick',
  xaxis: 'x',
  yaxis: 'y'
};

var data = [trace];

var layout = {
  dragmode: 'zoom',
  showlegend: false,
  xaxis: {
    rangeslider: {
		 visible: false
	 }
  }
};

Plotly.plot('graph', data, layout);
});
