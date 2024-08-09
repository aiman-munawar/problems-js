// program to check if a number is a float or integer value

function checkNumber(x) {

    let regexPattern = /^-?[0-9]+$/;
    
    // check if the passed number is integer or float
    let result = regexPattern.test(x);
    
    if(result) {
        console.log(`${x} is an integer.`);
    }
    else {
        console.log(`${x} is a float value.`)
    }

}

checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);