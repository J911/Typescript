class Person3 {
    constructor(name, city) {
        this.name = name;
        this.city = city;
        this.full = name + "(" + city + ")";
    }
}
let person3 = [
    new Person3("lee", "daejeon"),
    new Person3("kim", "seoul"),
    new Person3("park", "daegu")
];
console.log(JSON.stringify(person3));
