define(['marionette', 'tpl!templates/index.html'],
function (Marionette, indexTemplate) {
  return Marionette.ItemView.extend({
    template: indexTemplate
  });
});
