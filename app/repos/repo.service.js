(function () {
  'use strict';

  angular.module('MMApp.repos')
    .service('repoService', repoService);

  /* @ngInject */
  function repoService(restApiService, RepoModel) {
    this.get = get;

    ////////////////
    function get(apiName, params, headers) {
      return restApiService.get(apiName, {
          params,
          headers
        })
        .then((res) => res.data.filter((repo) => new RepoModel(repo)))
        .catch((err) => {
          console.error(err)
        });
    }
  }
})();
