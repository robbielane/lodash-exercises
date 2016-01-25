var _ = require("lodash");

var worker = function(user) {
  var logins = user.login.length

  return _.template('Hello <%= username %> (logins: <%= logins %>)')
    ({ username: user.name, logins: logins });
};

module.exports = worker;
