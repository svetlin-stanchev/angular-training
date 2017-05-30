(function () {
  'use strict';

  angular.module('MMApp.contributors')
    .component('mmContributors', {
      bindings: {
        repo: '<',
        onClose: '&'
      },
      controller: MmContributorsController,
      templateUrl: 'app/repos/contributors/contributors.component.html'
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
      $ctrl.onClose();
      $state.go('^');
    };
  }
})();
