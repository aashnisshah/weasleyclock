weasleyClock.controller('HomeCtrl', [
  '$firebaseObject',
  '$scope',
  function($firebaseObject, $scope){
    this.message = "Hello form the home controllers";

    $scope.me = $scope.personal.id || 1;

    $scope.myInfo = getMyInfo($scope.me);
    // setMyInfo(me, newInfo);

    function getMyInfo(me) {
      var myInfo = {};
      angular.forEach($scope.firebase, function(dude) {
        if(dude.id == me) {
          angular.copy(dude, myInfo);
        }
      });
      return myInfo;
    }

    $scope.updateStatus = function(me) {
      var newInfo = {
        id: 1,
        name: 'Mark',
        location: 'Peril',
        image: 'http://vignette1.wikia.nocookie.net/villains/images/8/86/Draco_Malfoy_(Year_1).jpg/revision/latest?cb=20120806221046'
      }
      $scope.setMyInfo(me, newInfo);
    };

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