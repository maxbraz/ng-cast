angular.module('video-player')
.controller('VideoListController', function($scope) {

})
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
