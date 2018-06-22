var width = 10;
var height = 10.0;
var myName = "Jay";
var animals = [ "tiger", "horse", "rhinoceros" ];
var myFullName = { first: "Jay", last: "Lee" };
console.log(typeof width, typeof height);
console.log(typeof myName);
console.log(typeof animals, typeof myFullName)

if(typeof width === "number" && typeof height == "number") {
    console.log("area: ", width * height);
}