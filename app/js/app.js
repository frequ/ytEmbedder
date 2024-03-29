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

    .controller('MainCtrl', function($scope, $location, $log, $timeout, $document){

        $scope.oncePlayed = false;
        $scope.playing = false;
        $scope.message = 'O-ou. Videon id puuttuu. Lisää osoitteen perään ?videoId=videonId.';
        $scope.playerVars = {
            //controls: 0,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            cc_load_policy: 0
        };
        $scope.$on('youtube.player.ready', function($event, player){
            $log.info('player ready');
            $scope.message = "Player ready!";

            //player.playVideo(); this doesnt work on the first time inited in android tab

        });

        $scope.$on('youtube.player.playing', function($event, player){
            $scope.message = "Playing!";
            $log.info('yt playing');
            $scope.playing = true;
            $scope.oncePlayed = true;
        });

        $scope.$on('youtube.player.paused', function($event, player){
            $scope.message = 'Paused!';
            $log.info('yt paused');
            $scope.playing = false;
        });


        $scope.getParams = function(){
            $scope.videoId = $location.search().videoId;
        };

        $scope.$on('youtube.player.ended', function ($event, player) {
            $log.info('yt ended');
            // do something
        });

    });


})();
