var _ = require("lodash");

var worker = function(words) {
  return _.chain(words)
    .sortBy()
    .map(function(word) {
      return _.toUpper(word + 'chained')
    })
};

module.exports = worker;
