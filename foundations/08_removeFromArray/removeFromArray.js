const removeFromArray = function(args, ...arrayElements) {

    for(let arg of args) {
        if (args.includes(arrayElements)) {
            args.splice(args.indexOf(arrayElements), arrayElements);
        } else {
            console.log("That element does not exist!");
        }
    }
};

let numbers = [1, 2, 3, 4];
removeFromArray(numbers, 1);

// Do not edit below this line
module.exports = removeFromArray;
