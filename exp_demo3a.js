var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
    res.send('Hello World');
});

router.post('/home', function(req, res, next) {
    res.send("You just call the post method at '/hello'!\n");


    });

    module.exports = router;