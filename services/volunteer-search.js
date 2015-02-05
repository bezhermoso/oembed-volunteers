var request = require('request');
var qstring = require('querystring');

var ones_url_pattern = /https?:.*\/opportunity-details\/(\d+)(\?.*)?/;

exports.Client = function (apiUrl) {
  return new Client(apiUrl);
};

function Client (apiUrl) {

    this.apiUrl = apiUrl;

    this.find = function (detailsUrl, callback) {

        var apiUrl = this.apiUrl;

        var matches = detailsUrl.match(ones_url_pattern);

        if (matches != null) {
            var id = matches[1];
            request.get(apiUrl + '/search?opportunity_id=' + id, function (err, response) {
                var body = JSON.parse(response.body);
                if (body.total_matching < 1) {
                    callback({
                        code: 404,
                        message: 'Not found'
                    });
                }
                callback(null, body.matches[0]);
            });
            return;
        }

        request.get(apiUrl + '/toolkit/' + detailsUrl, function (err, response) {
            console.log(err);
            console.log(response);
            callback();
        });
    };
};