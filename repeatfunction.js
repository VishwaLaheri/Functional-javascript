function repeat(operation, num) {
    if (num <= 0) return;
  
    operation();
  
    // Use setTimeout to release control of the event loop
    if (num % 50 === 0) {
      setTimeout(() => repeat(operation, num - 1), 0);
    } else {
      repeat(operation, num - 1);
    }
  }
  
  module.exports = repeat;