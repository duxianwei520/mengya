define([], function () {



var begin = {};

begin.init = function(){

	this.defineHash();

}

begin.defineHash = function(){

	var self = this;

	$$(".toolbar").show();
	$$(".toolbar-inner a.active").removeClass("active");
	$$(".tool-record").addClass("active");
	
	self.lookDetail();
}

begin.lookDetail = function(){

	var self = this;

	$$("#tab-tooth-grow i").on("click", function(){
		
		myApp.confirm('宝宝快一周岁啦，上乳侧切牙提前送上生日祝福！', function () {
			mainView.loadPage('recordDetail.html?v=123');
		});
		
	});

	$$("#tab-tooth-record i").on("click", function(){
		
		myApp.confirm('宝宝快一周岁啦，上乳侧切牙提前送上生日祝福！', function () {
			mainView.loadPage('recordDetail.html?v=123');
		});
		
	});
}


	return {
		begin: begin
	};

});