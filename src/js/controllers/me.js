define(['circle'], function (circle) {



var begin = {};

begin.init = function(){

	this.defineHash();

}

begin.defineHash = function(){

	var self = this;

	$$(".toolbar").show();
	$$(".toolbar-inner a.active").removeClass("active");
	$$(".tool-self").addClass("active");
	
	console.log(11);
	//第一次进入页面的实例化
	var c = circle({
		container : document.getElementById('progress-me'),
		emptyColor : '#f3f3f3',
		fillColor : '#b66afb',
		diameter : '233px',
		width : '45px'
	});
	c.update(65); //更新百分比 80%
}


	return {
		begin: begin
	};

});