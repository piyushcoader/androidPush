Template.loggedin.events({
	'click #logout':function(e,Template){
		e.preventDefault();
		Meteor.logout(function(error,result){
			if(!err){
				Router.go('/');
			}
		});
	}
});