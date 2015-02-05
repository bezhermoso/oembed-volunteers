'use strict';

var config = {
    'rest_api_url': 'http://ec2-54-165-78-156.compute-1.amazonaws.com:8100/api'
};

var factory = require('./app.js').app;
var app = factory(config);

var server = app.listen(process.env.PORT || 5000, function () {
    console.log('Listening on %s:%s', server.address().address, server.address().port);
});