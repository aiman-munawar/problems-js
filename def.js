let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

// Remove the first two elements
let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); 
// arrayIntegers1: [1, 2]
// arrayIntegersOriginal1 (after): [3, 4, 5]

// Remove all elements from index 3 onwards
let arrayIntegers2 = arrayIntegersOriginal2.splice(3);     
// arrayIntegers2: [4, 5]
// arrayIntegersOriginal2 (after): [1, 2, 3]

// Remove 1 element at index 3, then insert "a", "b", "c" at that position
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); 
// arrayIntegers3: [4]
// arrayIntegersOriginal3 (after): [1, 2, 3, "a", "b", "c", 5]
