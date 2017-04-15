angular.module('video-player')
.controller('AppController', function($scope) {
  this.videos = window.exampleVideoData;
  this.selectVideo = function() {};
  this.searchResults = function() {};
  this.currentVideo = exampleVideoData[0];
})
.directive('app', function() {
  return {
    templateUrl: 'src/templates/app.html',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {

    },
    controller: 'AppController'
  };
});
