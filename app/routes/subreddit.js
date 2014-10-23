import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var adapter = this.container.lookup("adapter:reddit");
		return adapter.getReddits(params.subreddit_id);
	}
});
