var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine','ejs');

var router = express.Router();

router.get('/input/:thing', function(req, res) {
    res.send('input: ' + req.params.thing);
});

app.use('/', router);


app.listen(8080);