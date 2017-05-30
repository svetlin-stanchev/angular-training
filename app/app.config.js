(function () {
  'use strict';

  angular.module('MMApp')
    .config(interceptorConfig)
    .config(restApiConfig)
    .config(routingConfig)
    .run(appRun);

  /* @ngInject */
  function interceptorConfig($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
  }

  /* @ngInject */
  function restApiConfig(restApiServiceProvider) {
    restApiServiceProvider.setApiPrefix('https://api.github.com');
  }

  /* @ngInject */
  function routingConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('contributors', {
        url: '/contributors',
        template: `<mm-contributors repo="$ctrl.activeRepo"></mm-contributors>`
      });
  }

  /* @ngInject */
  function appRun() {}
})();
