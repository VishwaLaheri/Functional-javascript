function duckCount() {
    return Array.prototype.slice.call(arguments).filter(arg =>
      Object.prototype.hasOwnProperty.call(arg, 'quack')
    ).length;
  }
  module.exports = duckCount;