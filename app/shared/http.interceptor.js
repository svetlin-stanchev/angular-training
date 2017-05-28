(function () {
  'use strict';

  angular.module('MMApp')
    .factory('httpInterceptor', httpInterceptor);

  /* @ngInject */
  function httpInterceptor($q, $document) {
    return {
      // optional method
      'request': function (req) {
        // do something on success
        return req;
      },

      // optional method
      'requestError': function (rejection) {
        // do something on error
        return $q.reject(rejection);
      },

      // optional method
      'response': function (res) {
        // do something on success
        return res;
      },

      // optional method
      'responseError': function (rejection) {
        // do something on error
        return $q.reject(rejection);
      }
    };
  }
})();
