(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .directive('cgSlider', cgSlider);

  cgSlider.$inject = [
    '$timeout'
  ];

  function cgSlider($timeout) {
    return {
      restrict: 'A',
      controller: 'SliderController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {},
      templateUrl: 'templates/cg-slider.html',
      link: function(scope, element) {
        $timeout(function() {
          $(document).ready(function(){
            $(element)
              .addClass('cg-slider')
              .slick({
                arrows: false,
                infinite: true,
                lazyLoad: 'progressive',
                dots: true,
                dotsClass: 'cg-slider-dots',
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1
              });
          });
        }, 0);
      }
    };
  }

})();
