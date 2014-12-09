var express = require("express");
var app = express();

//TODO: hook up dictionary here

app.get('/words/:query', function (req, res) {

    var status = false;

    //TODO: if querystring, after trimming duplicates, is less than 3
    res = res.status(400);

    //TODO: call method get list of responses
    //req.params.query -- this is how your reference the query
    var words = [];

    var responseData = {};
    responseData.status = (status) ? "success" : "fail";
    if (words) {
        responseData.data = {};
        responseData.data.words = words;
    }
    if (!status) {
        responseData.message = "Not enough unique characters";
    }

    res.jsonp(responseData);
    
});

// Launch server
app.listen(4242);