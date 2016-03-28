define(['marionette'], function (Marionette) {
  return Marionette.LayoutView.extend({
    el: 'body',
    regions: {
      menu: '#menu',
      main: '#main',
      top: '#top'
    }
  });
})
