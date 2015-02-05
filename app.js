var express = require('express');
var volsearch = require('./services/volunteer-search');

var app = express();

exports.app = function (config) {

    var client = volsearch.Client(config.rest_api_url);

    app.get('/oembed', function (req, res) {
        client.find(req.param('url'), function () {
           res.send();
        });
    });

    return app;

};