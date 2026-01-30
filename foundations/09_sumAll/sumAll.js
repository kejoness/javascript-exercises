const sumAll = function(number1, number2) {
    //convert int to array
    digit1 = Array.from(String(number1), Number);
    digit2 = Array.from(String(number2), Number);
    digits = digit1.concat(digit2);

    console.log(digits);
};

sumAll(1, 2);

// Do not edit below this line
module.exports = sumAll;
