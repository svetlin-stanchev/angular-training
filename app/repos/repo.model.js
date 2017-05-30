(function () {
  'use strict';

  angular.module('MMApp.repos')
    .factory('RepoModel', RepoModel);

  /* @ngInject */
  function RepoModel() {
    function Repo(rawData) {
      this.id = rawData.id;
      this.name = rawData.name;
      this.full_name = rawData.full_name;
      this.owner = rawData.owner;
    }

    return Repo;
  }
})();
