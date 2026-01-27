const reverseString = function(text) {
    words = text.split("");
    words.reverse();

    return words.join("");
};

text = "hello there";
console.log(reverseString(text));

// Do not edit below this line
module.exports = reverseString;
