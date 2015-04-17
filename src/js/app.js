require.config({
	baseUrl: 'js',
	paths: {
		Framework7: 'libs/framework7',
		circle: 'libs/fCircle'
		/*text: 'libs/text',
		GS: 'services/globalService',
		tpl: '../tpl',
		popup: '../popup'*/
	},
	shim: {
		Framework7: {
			exports: 'Framework7'
		},
		circle: {
			exports: 'circle'
		}
	},
	urlArgs: new Date().getTime()
});

require(['controllers/index',/*'Framework7',*/ 'router'], function (circle,index, router) {
	

});
