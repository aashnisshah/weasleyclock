weasleyClock.controller('AddCtrl', [
	'$firebaseObject',
	'$location',
	'$scope',
	'User',
	function($firebaseObject, $location, $scope, User){
	  
		$scope.person = {};
		$scope.user = User;
		$scope.errorMessage = false;

		var myFirebaseRef = new Firebase("https://fiery-heat-1300.firebaseio.com/people");
	    var syncObject = $firebaseObject(myFirebaseRef);
	    syncObject.$bindTo($scope, "firebase");

		$scope.add = function(person) {

			// $scope.personal = null;
			// angular.forEach($scope.firebase, function(dude) {
			// 	if(dude && dude.email && dude.email == person.email) {
			// 		$scope.personal = dude;
			// 		User.updateUser(dude);
			// 	}
			// });

			// if($scope.personal !== null) {
			// 	$location.path('/');
			// 	$location.replace();
			// } else {
			// 	$scope.errorMessage = true;
			// }
	    console.log("here", person);
	    if (person && person.hasOwnProperty('id')){
	    	var p = {};
	    	p[person['id']] = person;
	   	 	myFirebaseRef.set(p);
	    }
	    


	    }


	}
]);