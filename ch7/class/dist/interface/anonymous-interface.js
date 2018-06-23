let format = function (str, isUpper) {
    if (isUpper) {
        return str.toUpperCase();
    }
    else {
        return str.toLocaleLowerCase();
    }
};
console.log(format("1. : Happy!"));
console.log(format("1. : Happy!", true));
console.log(format("1. : Happy!", false));
