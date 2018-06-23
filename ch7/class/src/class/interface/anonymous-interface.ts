interface IFormat {
    (data: string, toUpper?: boolean): string;
}

let format: IFormat = function (str: string, isUpper: boolean) {
    if (isUpper) {
        return str.toUpperCase();
    } else {
        return str.toLocaleLowerCase();
    }
}

console.log(format("1. : Happy!"))
console.log(format("1. : Happy!", true))
console.log(format("1. : Happy!", false))