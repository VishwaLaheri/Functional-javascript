var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    // Use apply to pass the namespace and the rest of the arguments to console.log
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
}

module.exports = logger;