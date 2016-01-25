var _ = require("lodash");

var worker = function(comments) {
  return _.chain(comments)
    .groupBy('username')
    .map(function(userComments, username) {
      return { username: username, comment_count: _.size(userComments) }
    })
    .sortBy(function(count) {
      return -count['comment_count']
    })
};

module.exports = worker;
