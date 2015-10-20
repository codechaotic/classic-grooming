(function() {
  'use strict';

  angular
    .module('ClassicGrooming')
    .controller('FixedMenuController', FixedMenuController);

  function FixedMenuController() {
    this.menu = [
      {
        name: 'Our Salon',
        href: '#'
      },
      {
        name: 'Our Services',
        href: '#'
      },
      {
        name: 'Our Team',
        href: '#'
      },
      {
        name: 'Contact',
        href: '#'
      }
    ];
  }

})();
