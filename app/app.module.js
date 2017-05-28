(function () {
  'use strict';
  angular.module('MMApp', ['ui.router','MMApp.contributors', 'MMApp.header']);

  angular.element(document).ready(() => {
    angular.bootstrap(document, ['MMApp']);
  });
})();
