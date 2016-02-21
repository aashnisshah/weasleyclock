weasleyClock.controller('HomeCtrl', [
  '$firebaseObject',
  '$scope',
  'User',
  function($firebaseObject, $scope, User){
    this.message = "Hello form the home controllers";
    $scope.user = User;
    // debugger
    console.log(User.getUser);
    console.log($scope.user);
    // $scope.me = $scope.personal.id || 1;
    // $scope.me = 1;
    $scope.me = $scope.user.id;

    getMyInfo($scope.me);
    // setMyInfo(me, newInfo);

    function getMyInfo(me) {
      var myInfo = {};
      angular.forEach($scope.firebase, function(dude) {
        if(dude.id == me) {
          angular.copy(dude, myInfo);
          $scope.user = dude;
          User.user = dude;
        }
      });
    }

    $scope.setMyInfo = function(me, newInfo) {
      angular.forEach($scope.firebase, function(dude) {
        if(dude.id == me) {
          angular.copy(newInfo, dude);
        }
      });
    }

    var myFirebaseRef = new Firebase("https://fiery-heat-1300.firebaseio.com/people");
    var syncObject = $firebaseObject(myFirebaseRef);
    syncObject.$bindTo($scope, "firebase");
  }
]);