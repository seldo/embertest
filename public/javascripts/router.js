Tweets.Router.map(function () {
  this.resource('tweets', { path: '/' });
});

Tweets.TweetsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('tweet');
  }
});