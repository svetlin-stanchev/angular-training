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
      $ctrl.isSidebarActive = false;
      $ctrl.activeRepo = null;

      repoService.get('/orgs/angular/repos')
        .then((res) => { $ctrl.repos = res; })
        .catch((err) => { console.error(err); });
    };

    $ctrl.onSidebarClose = () => {
      $ctrl.isSidebarActive = false;
      $ctrl.activeRepo = null;
      $state.go('^');
    };

    $ctrl.openRepoData = (repo) => {
      $ctrl.activeRepo = repo;
      $ctrl.isSidebarActive = true;

      $state.go('home.contributors');
    };
  }
})();
