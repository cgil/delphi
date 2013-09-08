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
		if(arg.hook === "toPerson") {
			toPerson = arg.data.join(" ");
		}
		else if(arg.hook === "message") {
			message = arg.data.join(" ");
		}

	}

	var url = "";
	if(toPerson === "KATHY"){
		url = "https://venmo.com/beyonce?via=searchbox";
		var command = "curl https://api.venmo.com/payments -d access_token=b5bcn7BgBbw9NfxvFx6dZbFUhEMtNVkc -d user_id=243875 -d amount=0.01 -d note='" + message + "'";

        $.ajax({
            dataType: 'jsonp',
            data: data,                      
            jsonp: 'callback',
            url: "https://api.venmo.com/payments",                       
            success: function(data) {
                data = JSON.parse(data);
                window.console.dir(data);
                if(data.response.command.type === "newWindow") { //  Open a new window if
                    window.open(data.response.command.data);
                }
            }
        });



	}

	// Resolve the deferred
	response = {command: {type: "newWindow", data: url}};
	defer.resolve( JSON.stringify(response));

    return defer;
};


