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
	
	self.addTreat();
}

begin.addTreat = function(){

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
	
	//选择治疗措施
	$$(document).on('click', '.treat' , function(){
		if($$(this).hasClass("active")){
			//至少选择一项治疗措施
			if($$(this).parent().find(".active").length > 1){
				$$(this).removeClass("active");
			}
		} else {
			$$(this).addClass("active");
		}
	});

	//删除一条记录
	$$(document).on('click', '.delete' , function(e){
		e.stopPropagation();
		// myApp.confirm('确定要删除这条治疗记录吗？', function () {
		// 	mainView.loadPage('recordDetail.html?v=123');
		// });
		var _this = $$(this);
		myApp.modal({
			title:  '',
			text: '确定要删除这条治疗记录吗？',
			buttons: [
				{
					text: '取消',
					close:true
					
				},
				{
					text: '确定',
					onClick: function(){
						_this.parents(".accordion-item").remove();
					}
				}
			]
		});
	});

	//添加一条治疗记录
	var str = '<li class="accordion-item accordion-item-expanded">'+
				'<a href="#" class="item-content item-link item-head">'+
					'<div class="item-inner">'+
						'<div class="item-title">外伤牙处理</div>'+
						'<div class="item-after blue">2014年9月28日</div>'+
						'<span class="delete">X</span>'+
					'</div>'+
				'</a>'+
				'<div class="accordion-item-content">'+
					'<div class="list-block">'+
						'<ul>'+
							'<li class="first">'+
								'<label class="label-checkbox item-content">'+
									'<div class="item-inner">'+
										'<div class="item-title">医生</div>'+
										'<div class="item-after blue">王一多</div>'+
									'</div>'+
								'</label>'+
							'</li>'+
							'<li>'+
								'<label class="label-checkbox item-content">'+
									'<div class="item-inner">'+
										'<div class="item-title gray">治疗项目</div>'+
									'</div>'+
								'</label>'+
							'</li>'+
							'<li class="last">'+
								'<div class="item-inner">'+
									'<div class="item-title treat-wrap">'+
										'<span class="button button-round active treat treat1">补牙</span>'+
										'<span class="button button-round treat treat2">拔牙</span>'+
										'<span class="button button-round treat treat3">根管治疗</span>'+
										'<span class="button button-round treat treat4">窝沟封闭</span>'+
										'<span class="button button-round treat treat5">外伤牙处理</span>'+
									'</div>'+
								'</div>'+
							'</li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
			'</li>';
	$$("#add").on('click', function(){
		//关闭前面一个
		myApp.accordionClose($$(".accordion-item-expanded"));
		$$("#treat-list").append(str);
		// myApp.refreshScroller($$("#treat-list"))

	});
}

	return {
		begin: begin
	};

});