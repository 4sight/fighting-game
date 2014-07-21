var Character = Backbone.Model.extend({
	defaults: {
		name: '',
		health: ''
	},

	initialize: function(){
		console.log('Character chosen.');
	}
});