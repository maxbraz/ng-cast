angular.module('video-player')
.service('youTube', function($scope, $http) {
  $http.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      type: 'video', 
      q: 'monkey throws raccoon',
      videoEmbeddable: true
    }
  }).then(function successCallback(response) {
    console.log('successfull get to youtube: ', response);
  }, function errorCallback(response) {
    console.log('error: ', error);
  });
});
