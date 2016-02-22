/**
 * Created by Admin on 22.02.2016.
 */

var express = require('express'),
    app = express();

app.get('', function (req, res) {
    res.send('Hello World!');
});

app.listen(8080, function () {
    console.log('Example');
});