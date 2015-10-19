(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .directive('cgSlider', cgSlider);

  function cgSlider() {
    return {
      restrict: 'A',
      templateUrl: 'templates/cg-slider.html',
      link: function(scope, element) {
        $(element)
          .addClass('cg-slider')
          .slick({
            arrows: false,
            infinite: true,
            lazyLoad: 'progressive',
            dots: true,
            dotsClass: 'cg-slider-dot',
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
           });
      }
    };
  }

})();
