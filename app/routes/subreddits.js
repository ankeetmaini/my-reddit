import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var adapter = this.container.lookup("adapter:reddit");
		return adapter.findSubReddits();
	}
});
