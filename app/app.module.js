(function () {
  'use strict';
  angular.module('MMApp', ['ui.router', 'MMApp.contributors']);

  angular.element(document).ready(() => {
    angular.bootstrap(document, ['MMApp']);
  });
})();
