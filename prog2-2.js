// creating module 

var myApp = angular.module("myModule",[]);

//  creating controller
//  var myController = function($scope)
//                    {
//                    $scope.message= "My first angular program";
//                   };

//   registering controller with the module
//  myApp.controller("myController",myController);

myApp.controller("myController",function($scope)
                    {
                     $scope.message= "My first angular program";
                    }
                );
