// program to add element to an array

function addElement(arr) {

    // adding new array element
    arr.unshift(4);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
// passing array argument
addElement(array);