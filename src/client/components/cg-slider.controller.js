(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .controller('SliderController', SliderController);

  function SliderController() {
    var ctrl = this;
    ctrl.slides = [];

    [1,2,3,4].forEach(function(n) {
      ctrl.slides.push({
        image: 'http://placehold.it/1170x350?text=Slide+'+n
      });
    });
  }

})();
