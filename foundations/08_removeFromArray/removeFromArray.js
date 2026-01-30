const removeFromArray = function(args, ...arrayElements) {

    for(let arg of args) {
        for(let element of arrayElements) {
            if (args.includes(element)) {
                args.splice(args.indexOf(element), 1);
            } else {
                console.log("That element does not exist!");
            }
        }
    }
    return args;
};

// let numbers = [1, 2, 3, 4];
// let updatedArgs = removeFromArray(numbers, 1);
// console.log(updatedArgs);

// Do not edit below this line
module.exports = removeFromArray;
