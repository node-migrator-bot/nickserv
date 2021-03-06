(function() {
  var i, makeFun, regex;

  regex = {
    NICK: /^[A-Z_\-\[\]\\^{}|`][A-Z0-9_\-\[\]\\^{}|`]*$/i,
    PASSWORD: /^[^\s]{5,}$/,
    EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    KEY: /^[A-Z0-9]+$/i
  };

  makeFun = function(name) {
    var r;
    r = regex[name.toUpperCase()];
    return module.exports[name] = function(s) {
      return !r.test(s);
    };
  };

  for (i in regex) {
    makeFun(i.toLowerCase());
  }

}).call(this);
