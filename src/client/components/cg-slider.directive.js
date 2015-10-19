(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .directive('cgSlider', cgSlider);

  function cgSlider() {
    return {
      restrict: 'A',
      templateUrl: 'templates/cg-slider.html',
      link: function(scope, el, attrs) {
        $(function() {
            $('.cg-slider').unslider();
        });
      }
    };
  }

})();
