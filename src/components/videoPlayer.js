angular.module('video-player')
.controller('VideoPlayerController', function($scope, $sce) {
  this.video = 'something';
  // this.videoID = $sce.trustAsRsourceUrl(this.ctrl.playingVideo.id.videoID);
})
.directive('videoPlayer', function() {
  return {
    templateUrl: 'src/templates/videoPlayer.html',
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      playingVideo: '<',
      onClick: '<'
    },
    controller: 'VideoPlayerController'
  };
});
