import angular from 'angular';

angular.module('main', [])
    .controller('mainCtrl', function ($scope) {
        let self = $scope;
        self.text='222TESTTT';
        self.time = new Date();
        // setInterval(function () {
        //     self.time = new Date();
        //     console.log(self.time);
        // }, 1000);
        console.log('mainCtrl');
    });