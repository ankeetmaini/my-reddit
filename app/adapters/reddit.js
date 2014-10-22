import Ember from 'ember';

export default Ember.Object.extend({
	findSubReddits: function(){
		return Ember.$.getJSON('http://www.reddit.com/reddits.json')
			.then(function(results){
				return results.data.children.map(function(sub){
					return {
						id: sub.data.url.slice(0, -1).split('/').pop(),
						title: sub.data.title
					};
				});
			});
	},
	
	getReddits: function(id){
		return Ember.$.getJSON('http://www.reddit.com/r/'+id+'.json')
			.then(function(results){
				return {
					reddits: results.data.children.map(function(red){
						return {
							domain: red.data.domain,
							title: red.data.title,
							url: red.data.url,
							sub: red.data.subreddit
						};
					}),
					sub: results.data.children[0].data.subreddit
				}
			});
	}
});
