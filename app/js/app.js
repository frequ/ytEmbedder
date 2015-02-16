(function(){
  'use strict';

  var youtubeMb = angular.module('youtubeMb', ['youtube-embed'])

  .config(function($httpProvider){
    $httpProvider.defaults.timeout = 5000;
  })
  .config(function($locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  })

  .controller('MainCtrl', function($scope, $location){

    $scope.playing = false;
    $scope.message = 'O-ou. Videon id puuttuu. Lisää osoitteen perään ?videoId=videonId.';
    $scope.playerVars = {
      controls: 0,
      autoplay: 1,
      rel: 0,
      showinfo: 0
    };

    $scope.$on('youtube.player.playing', function($event, player){
      console.log('yt playing');
      $scope.playing = true;
    });

    $scope.$on('youtube.player.paused', function($event, player){
      console.log('yt paused');
      $scope.playing = false;
    });


    $scope.getParams = function(){
      $scope.videoId = $location.search().videoId;
    };

    $scope.$on('youtube.player.ended', function ($event, player) {
      console.log('yt ended');
    // do something
  });

  });


})();
