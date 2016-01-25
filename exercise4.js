var _ = require("lodash");

var worker = function(cities) {
    var rankCities = { hot: [], warm: [] };

    function hotTemp (temp) {
      return temp > 19;
    };

    _.forEach(cities, function(temps, city) {
      if (_.every(temps, hotTemp)) {
        rankCities.hot.push(city);
      } else if (_.some(temps, hotTemp)){
        rankCities.warm.push(city);
      }
    });
    return rankCities;
};

module.exports = worker;
