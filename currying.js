function curryN(fn, n) {
    n = n || fn.length;
    function curried(...args) {
      if (args.length >= n) {
        return fn(...args);
      } else {
        return function(...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    }
  
    return curried;
  }
  
  module.exports = curryN;
