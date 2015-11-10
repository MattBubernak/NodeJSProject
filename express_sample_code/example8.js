var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine','ejs');

var router = express.Router();

router.param('thing', function(req, res, next, thing) {
    console.log('doing thing validations on ' + thing);
    req.thing = thing + "bla";
    console.log('the new one is: ' + req.thing);

    next(); 
});

router.get('/input/:thing', function(req, res) {
    res.send('input: ' + req.thing);
});

app.use('/', router);


app.listen(8080);