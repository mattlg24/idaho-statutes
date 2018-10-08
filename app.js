var myApp = angular.module('idahoStatutes', [])

myApp.controller('mainController', [
    '$scope',
    '$http',
    function($scope, $http) {

        $http({method: 'GET', url: 'https://legislature.idaho.gov/statutesrules/idstat'}).then(function(response) {
            // console.log('response = ', response.data);
            var response = response.data
            var titleRegex = /\/statutesrules\/idstat\/Title[0-9]+/g

            var titleUrlArr = response.match(titleRegex)

//recursive function??

            for (var i = 0; i < titleUrlArr.length; i++) {
                // console.log(titleUrlArr[i])
                var titleLink = `https://legislature.idaho.gov${titleUrlArr[i]}`
                console.log(titleLink);
            }

        })

    }
])
