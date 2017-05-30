(function () {
  'use strict';

  angular.module('MMApp.repos')
    .component('mmRepos', {
      bindings: {},
      controller: MmReposController,
      templateUrl: 'app/repos/repos.component.html'
    });

  /* @ngInject */
  function MmReposController($state, repoService) {
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

      $state.go('repos.contributors');
    };

    $ctrl.closeRepoData = () => {
      $ctrl.activeRepo = null;
    }
  }
})();
