(function () {
  'use strict';

  angular.module('MMApp.contributors')
    .component('mmContributors', {
      bindings: {
        repo: '<'
      },
      controller: MmContributorsController,
      transclude: true,
      templateUrl: 'app/contributors/contributors.component.html'
    });

  /* @ngInject */
  function MmContributorsController(contributorService) {
    var $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.contributors = [];
    }
    $ctrl.$onChanges = (obj) => {
      if (obj.repo && $ctrl.repo) {
        contributorService.get($ctrl.repo.full_name)
          .then((contributors) => { $ctrl.contributors = contributors; })
      }

    };
  }
})();
