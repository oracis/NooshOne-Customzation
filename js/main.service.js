'use strict';

angular.module('customzationApp.service', [])
    .factory('Customzation', ['$q', '$http', function ($q, $http) {
        return {
            getData: function(){
                var deferred = $q.defer();
                $http({method: 'GET',
                    url: 'data.json'
                    })
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            },
            getConfig: function(user){
                var deferred = $q.defer();
                $http({method: 'GET',
                    url: 'config/' + user + '.json'})
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(function(data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        };
    }]);