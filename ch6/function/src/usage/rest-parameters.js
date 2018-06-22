function colors(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return a + " " + rest.join(" ");
}
var color1 = colors("red");
var color2 = colors("red", "orange");
var color3 = colors("red", "orange", "yellow");
console.log("color1=" + color1);
console.log("color2=" + color2);
console.log("color3=" + color3);