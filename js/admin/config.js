require.config({
	shim : {
		underscore : {
			exports : '_'
		},
		metis : {
			deps : [ 'jquery' ]
		},
		backbone : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		bootstrap : {
			deps : [ 'jquery' ],
			exports : '$.fn.popover'
		},
		marionette : {
			deps : [ 'jquery', 'underscore', 'backbone' ],
			exports : 'Marionette'
		}
	},
	paths : {
		jquery : '../libs/jquery-1.12.0.min',
		underscore : '../libs/underscore-min',
		backbone : '../libs/backbone-min',
		bootstrap : '../libs/bootstrap.min',
		marionette : '../libs/backbone.marionette.min',
		tpl : '../libs/tpl',
		metis: '../libs/metisMenu.min'
	},
	urlArgs : "bust=" + (new Date()).getTime()
});

require([ 'app', 'views/AppLayout', 'views/MenuView', 'views/TopView',
'init', 'backbone', 'underscore', 'bootstrap', 'metis' ],
function(app, AppLayout, MenuView, TopView, init, Backbone, _) {
	app.on('start', function() {
		app.rootView = new AppLayout;

		init.initialize();

		app.rootView.showChildView('menu', new MenuView);
		app.rootView.showChildView('top', new TopView);
		$('.loading-holder').fadeOut(500);
		Backbone.history.start();
	});
	app.start();
	 $(document).ajaxStart(function () {
		 $('.loading-holder').stop().fadeIn(300);
	 }).ajaxStop(function () {
		 $('.loading-holder').stop().fadeOut(500);
	 });
});
