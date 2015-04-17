define([], function () {



var begin = {};

begin.init = function(){

	this.defineHash();

}

begin.defineHash = function(){

	var self = this;

	$$(".toolbar").hide();
	
	self.swipeBtn();
}

begin.swipeBtn = function(){

	var switchElem = $$(".list-block-switch");
	$$(".btn").on('click', function(e){

		if($$(this).hasClass("active")){
			$$(this).removeClass("active").find("i").css("right", "20");
			switchElem.addClass("btn-close");
		} else {
			$$(this).addClass("active").find("i").css("right", 5);
			switchElem.removeClass("btn-close");
		}

	});
}


	return {
		begin: begin
	};

});