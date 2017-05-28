(function () {
  'use strict';

  angular.module('MMApp')
    .provider('restApiService', restApiService);

  /* @ngInject */
  function restApiService() {
    var _apiPrefix = '';

    //
    // Provider methods:
    //
    this.$get = providerMethods;

    /* @ngInject */
    function providerMethods($http) {
      return {
        get: (apiName, params, headers) => $http.get(_apiPrefix + apiName, { params, headers })
      }
    }

    //
    // Config methods:
    //

    this.setApiPrefix = function (apiPrefix) {
      _apiPrefix = apiPrefix;
    };
  }
})();
