(function () {
  'use strict';

  angular.module('MMApp')
    .component('mmHeader', {
      bindings: {},
      controller: MmHeaderController,
      template: `
        <header>
          <mm-logo></mm-logo>
        </header>
      `
    });

  /* @ngInject */
  function MmHeaderController() {
    var $ctrl = this;

    $ctrl.$onInit = () => {};
  }
})();
