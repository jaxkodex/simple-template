define(['routers/index', 'controllers/index'],
function (IndexRouter, indexController) {
  return {
    initialize: function () {
      new IndexRouter({
        controller: indexController
      });
    }
  };
});
