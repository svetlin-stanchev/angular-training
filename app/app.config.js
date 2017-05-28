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
    $urlRouterProvider.otherwise('home');

    $stateProvider
      .state('home', {
        url: '/home',
        template: `<mm-app></mm-app>`
      })
      .state('home.contributors', {
        url: '/contributors',
        template: `
          <mm-contributors ng-class="{'active' : $ctrl.isSidebarActive}" repo="$ctrl.activeRepo">
            <mm-close-button on-button-click="$ctrl.onSidebarClose()"></mm-close-button>
          </mm-contributors>
        `
      });
  }

  /* @ngInject */
  function appRun() {
  }
})();
