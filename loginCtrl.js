weasleyClock.controller('LoginCtrl', [
	'$firebaseObject',
	'$location',
	'$scope',
	function($firebaseObject, $location, $scope){
	  
		$scope.person = {};
		$scope.errorMessage = false;

		var myFirebaseRef = new Firebase("https://fiery-heat-1300.firebaseio.com/people");
	    var syncObject = $firebaseObject(myFirebaseRef);
	    syncObject.$bindTo($scope, "firebase");

		$scope.login = function(person) {
			$scope.personal = null;
			angular.forEach($scope.firebase, function(dude) {
				if(dude && dude.email && dude.email == person.email) {
					angular.copy(dude, $scope.personal);
					$scope.personal = dude;
				}
			});

			if($scope.personal !== null) {
				$location.path('/');
				$location.replace();
			} else {
				$scope.errorMessage = true;
			}
	    }

	}
]);