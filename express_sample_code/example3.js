var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine','ejs');
// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('nud');
});

// accept GET request at /user
app.get('/user', function (req, res) {
  res.render('users.html');
});


app.listen(8080);