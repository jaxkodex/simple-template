define(['marionette', 'tpl!templates/menu.html'],
function (Marionette, menuTemplate) {
  return Marionette.ItemView.extend({
    template: menuTemplate,
    onRender: function () {
      this.$('#menu-ul').metisMenu();
    }
  });
});
