angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

//Cheaest Drink
.controller('CheapestDrinkCtrl', function($scope, $q, CheapestDrink) {
  $scope.cheapestDrinks = CheapestDrink.all();
  $scope.map = CheapestDrink.mapCreated();
//  $scope.barInfo = CheapestDrink.barInfo();
//  console.log(CheapestDrink.barInfo());
//  $scope.fail = false;
//  $scope.test = function() {
//      var deferred = $q.defer();
//      var promise = deferred.promise;
//      promise.then(function(result) {
//          alert('success: ' + result);
//      }, function (reason) {
//          alert('Error: ' + reason);
//      });
//      
//      if($scope.fail)
//          deferred.reject('sorry');
//      else
//          deferred.resolve('cool');
//  };
  
    
//  var infoPromise = function() {
//      //service function returns promise
//      CheapestDrink.barInfo()
//      //then called when info gets back
//        .then(function(data) {
//          //promise fulfilled
//          console.log("DATA: " + data);
////          $scope.barInfo = data;
//      }, function(error) {
//          console.log("fucking error....");
//          //promise rejected....
//      });
//  };
//  $scope.barInfo = CheapestDrink.barInfo();
})


.controller('CheapestDrinkDetailCtrl', function($scope, $stateParams, CheapestDrink) {
  $scope.cheapestDrinks = CheapestDrink.get($stateParams.cheapestDrinkID);
})

.controller('SearchCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope) {
})

.controller('DriveCtrl', function($scope, Drive) {
    $scope.transportList = Drive.getList(); 
    
    /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleList = function(transport) {
    if ($scope.isShown(transport)) {
      $scope.shown = null;
    } else {
      $scope.shown = transport;
    }
  };
  $scope.isShown = function(transport) {
    return $scope.shown === transport;
  };
})

.controller('SettingsCtrl', function($scope) {
})


