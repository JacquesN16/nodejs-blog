const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes'); // index.js will be loaded 

app.use(express.static(path.join(__dirname,'public')));

//Middleware
  //form
app.use(express.urlencoded({
  extended: true
}));
  //XML, fetch, axios
app.use(express.json());

// HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'));

//Home,search, contact

//ROUTING ../routes/index.js
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});