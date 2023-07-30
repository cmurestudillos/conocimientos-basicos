//ES3
var obj = {
	foo : function() {...},
    bar : function() {
    	var that = this;
        document.addEventListener("click", function(e) {
        	that.foo();
        });
    }
}

//ES5
var obj = {
	foo : function() {...},
    bar : function() {
        document.addEventListener("click", function(e) {
        	this.foo();
        }.bind(this));
    }
}

//ES6
var obj = {
	foo : function() {...},
    bar : function() {
    	document.addEventListener("click", (e) => this.foo());
    }
}
