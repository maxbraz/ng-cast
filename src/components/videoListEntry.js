angular.module('video-player')

.directive('videoListEntry', function() {
  return {
    templateUrl: 'src/templates/videoListEntry.html',
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      video: '<',
      onClick: '<'
    },
    controller: ['$scope', '$http', function($scope, $http) {
    }],
  };
});
