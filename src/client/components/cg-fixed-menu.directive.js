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

      }
    };
  }

})();
