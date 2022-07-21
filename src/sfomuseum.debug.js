var sfomuseum = sfomuseum || {};

sfomuseum.debug = (function(){

    var debug_id = "sfomuseum-debug";
    
    var self = {

	'init': function(){

	    var debug_el = document.getElementById(debug_id);

	    if (debug_el){
		return;
	    }

	    var div = document.createElement("div");
	    div.setAttribute("id", debug_id);

	    document.body.prepend(div);
	},
	
	'log': function(){

	    var caller = arguments.callee.caller.name; 
	    console.log(caller, arguments);

	    var debug_el = document.getElementById(debug_id);

	    if (debug_el){

		var count = arguments.length;
		
		for (var i=0; i < count; i++){

		    var arg = arguments[i];
		    var str_arg = JSON.stringify(arg, "", " ");

		    var dt = new Date();

		    var div = document.createElement("div");
		    div.setAttribute("class", "sfomuseum-debug-log");

		    var date = document.createElement("div");
		    date.setAttribute("class", "sfomuseum-debug-log-date");
		    date.appendChild(document.createTextNode(dt.toString()));
			
		    var caller_div = document.createElement("div");
		    caller_div.setAttribute("class", "sfomuseum-debug-log-caller");
		    caller_div.appendChild(document.createTextNode(caller));

		    var body = document.createElement("pre");
		    body.setAttribute("class", "sfomuseum-debug-log-body");
		    body.appendChild(document.createTextNode(str_arg));

		    div.appendChild(date);
		    div.appendChild(body);
		    div.appendChild(caller_div);
		    
		    debug_el.prepend(div);
		}
	    }
	},
    };

    return self;
})();
