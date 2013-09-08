var jquery = require('jquery');

exports.init = function(args) {

	var isset = function (check) {
        var test = (typeof check !== 'undefined' && check !== null && check !== "");
        if (check instanceof Array) {
            test = test && (check.length > 0);
        }
        return test;
    };

	var defer = jquery.Deferred();
	var response = {};

	// Set object as a promise
	defer.promise( response );

	var url = "http://dynamic.xkcd.com/random/comic/";

	// Resolve the deferred
	response = {command: {type: "newWindow", data: url}};
	defer.resolve( JSON.stringify(response));

    return defer;
};


