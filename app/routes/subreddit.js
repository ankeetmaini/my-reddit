import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model){
		var adapter = this.container.lookup("adapter:reddit");
		controller.set("model", adapter.getReddits(model.id));
	},
	model: function(params) {
		var adapter = this.container.lookup("adapter:reddit");
		return adapter.getReddits(params.subreddit_id);
	}
});
