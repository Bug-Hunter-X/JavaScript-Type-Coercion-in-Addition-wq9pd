function foo(a, b) {
  // Explicit type conversion using Number()
  return Number(a) + Number(b);
}

// Alternatively, using a type check
function foo2(a, b) {
  if (typeof a === 'number' && typeof b === 'number'){
    return a + b;
  } else {
    console.error("Invalid input types for addition.  Both must be numbers.");
    return NaN; // Or throw an error
  }
}

console.log(foo(1, '2')); // Output: 3
console.log(foo2(1,'2')); // Output: Invalid input types for addition. Both must be numbers. NaN