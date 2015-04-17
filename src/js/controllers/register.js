define([], function () {



var begin = {};

begin.init = function(){

	this.defineHash();

}

begin.defineHash = function(){

	var self = this;

	$$(".toolbar").hide();
	
}


	return {
		begin: begin
	};

});