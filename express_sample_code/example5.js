var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine','ejs');

var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello World');  
});

router.get('/users', function(req, res) {
    res.send('Hello users!'); 
});

app.use('/test', router);


app.listen(8080);