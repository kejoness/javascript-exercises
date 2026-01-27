const repeatString = function(string, num) {
    repetition = 0;
    newStr = "";

    if (num < 0) {
        console.log("ERRROR");
    }

    while (repetition != num) {
        if (num >= 0) {
            newStr = newStr + string;
            repetition++;
        } else if (num < 0) {
            return "ERROR";
        }
        
    }

    return newStr;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
