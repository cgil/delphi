var jquery = require('jquery');


exports.init(function(args){
    //args is an array that is in this form
    var toPoint;
    var fromPoint;
    var defer = jquery.Deferred();
    var response = {};
    defer.promise(response);
    for(var i = 0; i < args.length; i++){
        var arg = args[i]
        if(arg.hook =="to") 
            toPoint = arg.data.join();
        else
            fromPoint = arg.data.join();
    }

    defer.resolve(JSON.stringify({"command": {"type": "newWindow", "http://www.hipmunk.com/flights/ewr-to-DTT#!dates=Oct04,Oct06&pax=1"}}));
});
