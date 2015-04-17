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
	
	self.save();
}

begin.save = function(){

	var self = this;
	$$(".icon-ok").on('click', function(){
		// myApp.confirm('感谢你为YY的牙齿记录添砖加瓦！萌芽君为爱牙计划添加了2项新任务，快去看看吧！', function () {
		// 	mainView.loadPage('index.html');
		// });
		myApp.modal({
			title:  '',
			text: '感谢你为YY的牙齿记录添砖加瓦！萌芽君为爱牙计划添加了2项新任务，快去看看吧！',
			buttons: [
				{
					text: '好',
					bold: true,
					onClick: function(){
						mainView.loadPage('index.html');
					}
				}
			]
		});
	});
}

	return {
		begin: begin
	};

});