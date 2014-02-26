var MainRouter = Backbone.Router.extend({

	routes: {
		"folk" : "listen"
	},

	initialize: function(){
		console.log('hey guys');
	},

	listen: function(){
		$('.marketing').html('');

		new GenreView();
	}


})