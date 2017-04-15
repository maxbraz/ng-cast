angular.module('video-player')
.controller('VideoPlayerController', ['$scope', function($scope) {
  //this.video = 'something';
  console.log($scope);
  // this.videoID = $sce.trustAsRsourceUrl(this.ctrl.playingVideo.id.videoID);
}])
.directive('videoPlayer', function() {
  return {
    scope: {
      playingvideo: '<',
      onClick: '<'
    },
    controller: 'VideoPlayerController',
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html',
  };
});
