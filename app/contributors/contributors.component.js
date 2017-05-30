(function () {
  'use strict';

  angular.module('MMApp.contributors')
    .component('mmContributors', {
      bindings: {
        repo: '<'
      },
      controller: MmContributorsController,
      templateUrl: 'app/contributors/contributors.component.html'
    });

  /* @ngInject */
  function MmContributorsController($state, contributorService) {
    var $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.contributors = [];
    }

    $ctrl.$onChanges = (obj) => {
      if (obj.repo && $ctrl.repo) {
        contributorService.get($ctrl.repo.full_name)
          .then((contributors) => {
            $ctrl.contributors = contributors;
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };

    $ctrl.onSidebarClose = () => {
      $state.go('^');
    };
  }
})();
