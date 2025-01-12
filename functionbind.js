module.exports = function(namespace) {
    // Use bind to partially apply the namespace to console.log
    return console.log.bind(console, namespace);
  };