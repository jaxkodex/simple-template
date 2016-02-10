define(['views/index', 'app'], function (IndexView, app) {
  return {
    index: function () {
      var view = new IndexView;
      app.rootView.showChildView('main', view);
    }
  };
});
