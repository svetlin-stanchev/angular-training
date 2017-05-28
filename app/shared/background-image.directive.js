(function () {
  'use strict';

  angular.module('MMApp')
    .directive('mmBackgroundImage', mmBackgroundImage);

  /* @ngInject */
  function mmBackgroundImage() {
    var directive = {
      link: mmBackgroundImageLink,
      restrict: 'A'
    };
    return directive;

    function mmBackgroundImageLink(scope, element, attrs) {
      attrs.$observe('mmBackgroundImage', function (value) {
        if (value) {
          element.css({
            'background-image': 'url(' + value + ')'
          });
        } else {
          element.removeAttr('style');
        }
      })
    }
  }
})();
