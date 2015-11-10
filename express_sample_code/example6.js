var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine','ejs');

var router = express.Router();

router.use(function(req, res, next) {
    console.log("method:" + req.method + " url:" + req.url);
    next(); 
});

router.get('/', function(req, res) {
    res.send('Hello World');  
});

router.get('/users', function(req, res) {
    res.send('Hello users!'); 
});

app.use('/test', router);


app.listen(8080);