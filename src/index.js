
exports.min = function min (array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return array.reduce(function (p, v) {
        return ( p < v ? p : v );
      });
}

exports.max = function max (array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return array.reduce(function (p, v) {
        return ( p > v ? p : v );
      });
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) {
        return 0;
    }
    result = array.reduce(function (sum, current) {
        return sum + current;
      }, 0);
      return result/array.length;
}
