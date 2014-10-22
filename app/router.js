import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource("subreddits", {path: "/"}, function(){
		this.resource("subreddit", {path: "/:subreddit_id"});
	});
});

export default Router;
