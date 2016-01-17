/**
 * Created by abrooksnagel on 1/15/16.
 */
var app = angular.module('myApp', []);

app.controller('MainController',  ['$scope', 'StudentService', function($scope, StudentService) {
    $scope.cohortInfo = StudentService.cohortInfo;
    //$scope.data = DataService.data;
    //DataService.makeCall();
}]);

app.factory('StudentService', function() {
   var cohortInfo = {
       name: "Theta",
       location: "Prime Digital Academy",
       city: "Bloomington, MN",
       instructors: ["Joel", "Kristy", "Scott"],
       foamCubes: 47,
       desks: 25,
       colors: ["Mermaid Treasure", "White"],
       animals: ["Aesop"],
       technologies: ["HTML", "CSS", "Javascript", "Node", "Express", "Angular", "jQuery", "Mongoose", "Mongo"],
       transcendence: "through suffering"
   };
    return {
        cohortInfo: cohortInfo
    }
});

//app.factory('DataService', ['$http', function($http) {
//
//    var data = {};
//
//    var makeCall = function() {
//        $http.get('/getMyThing').then(function(response) {
//            data.results = response.data;
//        })
//    };
//    return {
//        makeCall: makeCall,
//        data: data
//    }
//}]);