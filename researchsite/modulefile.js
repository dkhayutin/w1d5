var array = [];

module.exports = {
  stores: function(num) {
    if (num) {
      array.push(num);
      return array
    } else {
      return array
    }

  },
  sortsList: function(array) {
    array.sort(function(a, b) {
      return a - b
    })
    return array
  }
}
