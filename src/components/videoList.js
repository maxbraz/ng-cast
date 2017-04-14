angular.module('video-player')
.directive('videoList', function() {
  return {
    templateUrl: 'src/templates/videoList.html',
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      videos: '<',
      onClick: '<'
    },
    controller: ['$scope', '$http', function($scope, $http) {
    	
    }],
  };
});
