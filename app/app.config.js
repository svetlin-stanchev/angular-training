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
    $urlRouterProvider.otherwise('/repos');

    $stateProvider
      .state('repos', {
        url: '/repos',
        template: `<mm-repos></mm-repos>`
      })
      .state('repos.contributors', {
        url: '/contributors',
        template: `<mm-contributors repo="$ctrl.activeRepo" on-close="$ctrl.closeRepoData()"></mm-contributors>`
      });
  }

  /* @ngInject */
  function appRun() {}
})();
