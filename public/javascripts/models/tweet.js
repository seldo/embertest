Tweets.Tweet = DS.Model.extend({
  tweet: DS.attr('string'),
  author: DS.attr('string'),
  isFave: DS.attr('boolean')
});

Tweets.Tweet.FIXTURES = [
  {
    id: 3,
    tweet: "I'm the last tweet!",
    author: "Bob",
    isFave: true
  },
  {
    id: 2,
    tweet: "I'm the middle tweet",
    author: "Seldo",
    isFave: false
  },
  {
    id: 1,
    tweet: "I'm the first tweet!",
    author: "Jane",
    isFave: false
  }
];