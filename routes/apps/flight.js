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

	var toCity = null;
	var fromCity = null;
	for(var i = 0; i < args.length; i++) {
		var arg = args[i];
		if(arg.hook === "toCity") {
			toCity = arg.data.join(" ");
		}
		else if (arg.hook === "fromCity") {
			fromCity = arg.data.join(" ");
		}
	}

	// Resolve the deferred
	response = {command: {type: "newWindow", data: "http://google.com"}};
	defer.resolve( JSON.stringify(response));

    return defer;
};


