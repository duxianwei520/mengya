define([ /*'controllers/index'*/'Framework7','circle','controllers/index'], function (Framework7, circle, index) {


	/* F7的全局设置在这里 */

	window.$$ = window.Dom7;
	

	window.myApp = new Framework7({
		// scroller: 'native',
		cacheDuration: 1000,
		cache: false,
		pushState: false,
		swipeBackPage: false,
		preloadPreviousPage: false,
		popupCloseByOutside: false,
		animateNavBackIcon: true,
		modalTitle: '提示',
		modalButtonOk: '确定',
		modalButtonCancel: '取消',
		smartSelectBackText: '完成',
		smartSelectBackTemplate: '<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>'
	});

	window.mainView = myApp.addView('#mainView', {
		dynamicNavbar: true
	});


	/*设置进入每个页面载入对应的js文件*/

	var hash = {
		
			index 				: 'index',
			about 				: 'about',
			login				: 'login',
			register			: 'register',
			info1				: 'info1',
			info2				: 'info2',
			passwordFind		: 'passwordFind',
			planDetail			: 'planDetail',
			me					: 'me',
			set					: 'set',
			record				: 'record',
			recordDetail		: 'recordDetail',
			illDetail			: 'illDetail'

		};

	var router = {};

	router.init = function(){

		// $$("#login").click();
		this.defineHash();

	}

	router.defineHash = function(){

		var self = this;

		self.loadResource();
	}

	router.loadResource = function(){

		var self = this;


		$$(document).on('pageBeforeInit', function (e) {

			var page = e.detail.page;
			self.load(page.name);
		});

	}

	router.load = function (controllerName) {

			if (controllerName in hash) {
				require(['controllers/' + hash[controllerName]], function (controller) {
					// console.log(controller);
					controller.begin.init();
				});
			}
		}

	router.init();//每次进入新的views执行页面的启动方法
	
	index.begin.init();//第一次进入首页的手动执行事件




	return {
		router: router
	};

});