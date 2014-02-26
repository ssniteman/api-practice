var MainRouter = Backbone.MainRouter.extend({

	routes: {
		"folk" : "listen"
	}

	initialize: function(){
		console.log('hey guys');
	},

	listen: function(){
		$('.marketing').html('');

		new GenreView();
	}

	
})