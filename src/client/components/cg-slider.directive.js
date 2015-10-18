(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .directive('cgSlider', cgSlider);

  function cgSlider() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        console.log(el.name);
      }
    };
  }

})();
