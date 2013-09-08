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

	var toPerson = null;
	var message = Math.random().toString();
	for(var i = 0; i < args.length; i++) {
		var arg = args[i];
		if(arg.hook === "type") {
			toPerson = arg.data.join(" ");
		}

	}

	var url = "http://www.yelp.com/search?find_desc=" +  desc + "&find_loc=philadelphia";

	// Resolve the deferred
	response = {command: {type: "newWindow", data: url}};
	defer.resolve( JSON.stringify(response));

    return defer;
};


