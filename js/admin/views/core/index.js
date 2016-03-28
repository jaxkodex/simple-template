define(['marionette', 'tpl!templates/core/index.html'],
function (Marionette, indexTemplate) {
  return Marionette.ItemView.extend({
    template: indexTemplate
  });
});
