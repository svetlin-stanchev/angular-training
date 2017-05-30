(function () {
  'use strict';

  angular.module('MMApp')
    .component('mmApp', {
      bindings: {},
      controller: MmAppController,
      templateUrl: 'app/app.component.html'
    });

  /* @ngInject */
  function MmAppController($state, repoService) {
    var $ctrl = this;

    $ctrl.$onInit = () => {
      $ctrl.repos = [];
      $ctrl.activeRepo = null;

      repoService.get('/orgs/angular/repos')
        .then((res) => {
          $ctrl.repos = res;
        })
        .catch((err) => {
          console.error(err);
        });
    };

    $ctrl.openRepoData = (repo) => {
      $ctrl.activeRepo = repo;

      $state.go('contributors');
    };
  }
})();
