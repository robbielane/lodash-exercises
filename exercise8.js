var _ = require("lodash");

var worker = function(freelancers) {
  freelancers = _.sortBy(freelancers, 'income')

  var average = _.reduce(freelancers, function(sum, freelancer) {
        return sum + freelancer.income;
    }, 0);

  average = average / freelancers.length;

  var under = _.filter(freelancers, function(freelancer) {
    return freelancer.income <= average;
  });

  var over = _.filter(freelancers, function(freelancer) {
    return freelancer.income > average;
  });

  return { average: average, underperform: under, overperform: over }
};

module.exports = worker;
