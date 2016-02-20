weasleyClock.controller('HomeCtrl', [ 
  '$scope',
  function($scope){
    this.message = "Hello form the home controllers";

    $scope.firebase = [
		{
			id: 0,
			name: 'Jon',
			location: 'Work',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
		},
		{
			id: 1,
			name: 'Mark',
			location: 'Work',
      image: 'http://vignette1.wikia.nocookie.net/villains/images/8/86/Draco_Malfoy_(Year_1).jpg/revision/latest?cb=20120806221046'
		},
    {
      id: 2,
      name: 'Jon',
      location: 'Work',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
    },
    {
      id: 3,
      name: 'Mark',
      location: 'Work',
      image: 'http://vignette1.wikia.nocookie.net/villains/images/8/86/Draco_Malfoy_(Year_1).jpg/revision/latest?cb=20120806221046'
    },
    {
      id: 4,
      name: 'Jon',
      location: 'Peril',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
    },
    {
      id: 5,
      name: 'Mark',
      location: 'Peril',
      image: 'http://vignette1.wikia.nocookie.net/villains/images/8/86/Draco_Malfoy_(Year_1).jpg/revision/latest?cb=20120806221046'
    },
	];

    $scope.home = [];
    $scope.work = [];
    $scope.peril = [];

    $scope.me = 1;

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
  }
]);