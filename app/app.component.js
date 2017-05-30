(function () {
  'use strict';

  angular.module('MMApp')
    .component('mmApp', {
      bindings: {},
      controller: MmAppController,
      templateUrl: 'app/app.component.html'
    });

  /* @ngInject */
  function MmAppController($state, repoService) {
    var $ctrl = this;

    $ctrl.$onInit = () => {};
  }
})();
