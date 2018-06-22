let numbers = ["one", "two", "three", "four", "five"];
let [num1, num2] = numbers;
console.log(num1, num2);
let [, , num3, num4,] = numbers;
console.log(num3, num4);
[num4, num3] = [num3, num4];
console.log(num3, num4);
let [color1, color2 = "blue"] = ["black"];
console.log(color1, color2);
