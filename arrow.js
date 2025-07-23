const arrowFunc1 = (a, b) => a + b;    // Multiple parameters, returns a + b
const arrowFunc2 = a => a * 10;        // Single parameter (parentheses optional), returns a * 10
const arrowFunc3 = () => {};           // No parameters, returns undefined
const arrowFunc4 = (a, b) => {
  // Multiple statements require curly braces and explicit return
  const sum = a + b;
  return sum * 2;
};
