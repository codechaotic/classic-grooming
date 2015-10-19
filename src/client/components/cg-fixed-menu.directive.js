(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .directive('cgFixedMenu', cgFixedMenu);

  function cgFixedMenu() {
    return {
      restrict: 'A',
      templateUrl: 'templates/cg-fixed-menu.html',
      link: function(scope, el, attrs) {
        if (Modernizr.picture) {
          console.log('picture');
        } else {
          console.log('no-picture');
        }
      }
    };
  }

})();
