const express = require('express');
const port = process.env.PORT || 4200;
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);


app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/views/'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/home', require('./routes/home.js'));



app.listen(port, () => {
    console.log('Server listening on port ' + port + '…');
})
