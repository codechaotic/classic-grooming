(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .directive('cgFixedMenu', cgFixedMenu);

  function cgFixedMenu() {
    return {
      restrict: 'A',
      controller: 'FixedMenuController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {},
      templateUrl: 'templates/cg-fixed-menu.html',
      link: function(scope, element) {
        $(element)
          .addClass('cg-fixed-menu');
      }
    };
  }

})();
