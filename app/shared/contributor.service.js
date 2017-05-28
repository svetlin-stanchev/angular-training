(function () {
  'use strict';

  angular.module('MMApp')
    .service('contributorService', contributorService);

  /* @ngInject */
  function contributorService(restApiService, ContributorModel) {
    this.get = get;

    ////////////////
    function get(apiName, params, headers) {
      return restApiService.get('/repos/' + apiName + '/contributors', { params, headers })
        .then((res) => res.data.filter((contributors) => new ContributorModel(contributors)))
        .catch((err) => { console.error(err) });
    }
  }
})();
