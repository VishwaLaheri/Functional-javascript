module.exports = function arrayMap(arr, fn) {
    return arr.reduce((result, item, index, array) => {
      result.push(fn(item, index, array));
      return result;
    }, []);
  };