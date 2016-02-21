weasleyClock.factory('User', function() {
	this.user = {
		id: 1,
		name: '',
		email: '',
		image: '',
		location: '',
	};

	return {
		getUser: function() {
			return user
		},
		updateUser: function(newUser) {
			this.user = newUser;
		}
	};
});