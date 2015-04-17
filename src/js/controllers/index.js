define(['circle'], function (circle) {




var begin = {};

begin.init = function(){
	
	this.defineHash();

}

begin.defineHash = function(){

	var self = this;

	$$(".toolbar").show();
	$$(".toolbar-inner a.active").removeClass("active");
	$$(".tool-plan").addClass("active");

	self.round();
}

/*圆环相关*/
begin.round = function(){

	var self = this;

	var $progress = $$(".progress");	
	/*绑定圆环的点击事件*/
	$progress.on('click', function(){
		index = $$(this).index() + 1;
		self.switchTab($$(this),index);
		
		
		
	});

	//第一次进入页面的实例化
	var c1 = circle({
		container : document.getElementById('progress1'),
		emptyColor : '#fff',
		fillColor : '#fd4d87',
		diameter : '233px',
		width : '45px'
	});
	c1.update(65); //更新百分比 80%
	var percent = 0;
	$$("#progress1").addClass("inited");
	/*var repeatId = setInterval(function(){
		if(percent > 66){
			clearInterval(repeatId);
			return;
		}
		c1.update(percent);
		percent = percent + 1;
	}, 10);*/


	/* 点击tab时候绑定圆环切换 */
	$$(".row-plan .col").on('click', function(){
		index = $$(this).index();
		self.switchTab($progress.eq(index),index);
	});
}


//具体的执行事件
begin.switchTab = function(ele,index){

	var self = this;
	var $progress = $$(".progress"),	//圆环的元素缓存
		index,							//要显示的index值
		len = $$(".progress").length,	//总长度
		id,								//要实例化的圆环id
		c,								//圆环实例化变量
		curProgress,					//当然要操作的圆环	
		p,								//圆环百分比增量
		c,								//圆环的实例化对象赋值给变量
		pMax,							//每个圆环百分比
		min,							//当前完成任务数目
		max;							//总共需要完成的任务数目

		
		// index = $$(this).index() + 1;
		$$(".progress.active").hide().removeClass("active");

		if(index < len){

			$progress.eq(index).show().addClass("active");
			myApp.showTab('#tab' + (index + 1));
			curProgress = $progress.eq(index);
			c = 'c' + (index + 1);
			id = 'progress' + (index + 1);

		} else {//回归到第一项

			$progress.eq(0).show().addClass("active");
			myApp.showTab('#tab1');
			curProgress = $progress.eq(0);
			c = 'c1';
			id = 'progress1';

		}
		
		/*如果已经实例化过了*/
		if(!curProgress.hasClass("inited")){
			c = circle({
				container : document.getElementById(id),
				emptyColor : '#fff',
				fillColor : '#fd4d87',
				diameter : '233px',
				width : '45px'
			});

			// c.update(65); //更新百分比 80%
			min = parseInt(curProgress.find(".num").text());
			max = parseInt(curProgress.find(".totle").text().replace("/",""));
			pMax = min/max*100;
			
		
			// console.log(pMax);
			c.update(pMax);

			/*动画效果先去掉了 防止报错*/
			/*p =  0;
			r = 'r' + index;
			// console.log('r' + index);
			r = setInterval(function(){
				if(p > pMax){
					clearInterval(r);
					return;
				}
				c.update(p);
				p = p + 1;
			}, 10);*/
		}
		ele.addClass("inited");
}



	return {
		begin: begin
	};

});