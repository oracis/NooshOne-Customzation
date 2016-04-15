'use strict';

angular.module('customzationApp.controller', ['customzationApp.service'])
.controller('mainController', function($scope, $q, Customzation){
        $scope.info = {
            dataModel: {},
            config: {},
            currentUser: 'staples' //ergo
        };

        $q.all([Customzation.getData(), Customzation.getConfig($scope.info.currentUser)]).then(function(result){
            $scope.info.dataModel = result[0];
            $scope.info.config = result[1];

        });
});