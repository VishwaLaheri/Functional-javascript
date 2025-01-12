function Spy(target, method) {
    const originalFunction = target[method];
    const spy = { count: 0 }; 
  
    target[method] = function(...args) {
      spy.count++; 
      return originalFunction.apply(this, args); 
    };
  
    return spy; // Return the spy object
  }
  
  module.exports = Spy;