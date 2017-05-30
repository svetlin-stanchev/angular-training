(function () {
  'use strict';

  angular.module('MMApp')
    .factory('ContributorModel', ContributorModel);

  /* @ngInject */
  function ContributorModel() {
    function Contributor(rawData) {
      this.avatar_url = rawData.avatar_url;
    }

    return Contributor;
  }
})();
