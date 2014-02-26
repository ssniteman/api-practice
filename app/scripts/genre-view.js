var GenreView = Backbone.View.extend({

	createTemplate: _.template($('#genre-template').text()),

	initialize: function(){


		$('.marketing').append(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}
});