function curryN(fn, n) {
    // If n is not provided, use the arity of the function (number of expected arguments)
    n = n || fn.length;
  
    // The curried function that collects arguments
    function curried(...args) {
      // If we've collected enough arguments, invoke the original function
      if (args.length >= n) {
        return fn(...args);
      } else {
        // Otherwise, return a function to collect more arguments
        return function(...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    }
  
    return curried;
  }
  
  module.exports = curryN;