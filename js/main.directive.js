'use strict';

angular.module('customzationApp.directive', [])
.directive('cusContainer', function(){
    return {
        template: '<ng-include src="getTemplateUrl()"/>',
        scope: {
            templateUrl: '@'
        },
        restrict: 'E',
        controller: function($scope) {
            //function used on the ng-include to resolve the template
            $scope.getTemplateUrl = function() {
                return $scope.templateUrl;
            }
        }
    };
});