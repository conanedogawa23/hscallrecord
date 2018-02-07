const express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  app = express(),
  mysql = require('mysql'),
  busboyBodyParser = require('busboy-body-parser'),
  cors = require('cors');

const index = require('./routes/index'),
  users = require('./routes/users');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mycalldb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   // let sql = "CREATE TABLE admin (firstname VARCHAR(50) NOT NULL, phoneno VARCHAR(15) NOT NULL, empid VARCHAR(20) NOT NULL PRIMARY KEY, username VARCHAR(20) NOT NULL, lastname VARCHAR(50) NOT NULL, password VARCHAR(100) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP, status CHAR(1) NOT NULL)"
//   // con.query(sql, (err, result)=> {
//   //   if (err) throw err;
//   //   console.log("table created");
//   // });
// });

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// // app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(busboyBodyParser({ limit: '10mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use('/index', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {
  app
};
