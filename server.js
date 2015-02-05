'use strict';

var config = {
    'rest_api_url': 'http://localhost:8000/app_dev.php/api'
};

var factory = require('./app.js').app;
var app = factory(config);

var server = app.listen(process.env.PORT || 5000, function () {
    console.log('Listening on %s:%s', server.address().address, server.address().port);
});