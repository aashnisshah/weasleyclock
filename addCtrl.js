weasleyClock.controller('AddCtrl', [
	'$firebaseObject',
	'$location',
	'$scope',
	'User',
	function($firebaseObject, $location, $scope, User){
	  
		$scope.person = {};
		$scope.user = User;
		$scope.errorMessage = false;

	    $scope.allLocations = [
	      'Work',
	      'Home',
	      'School',
	      'Peril'
	    ];

		var myFirebaseRef = new Firebase("https://fiery-heat-1300.firebaseio.com/people");
	    var syncObject = $firebaseObject(myFirebaseRef);
	    syncObject.$bindTo($scope, "firebase");

		$scope.add = function(person) {

		    console.log("here", person);
		    debugger
		    if (person && person.hasOwnProperty('id')){
		   	 	myFirebaseRef.push(person, success);
		   	 	$location.path('/');
		    }
	    }

	    function success() {
			$location.path('/');
	    }


	}
]);