interface Person {
    name: string;
    city: string;
}

let person4: Person[] = [
    { name: "lee", city: "daejeon" },
    { name: "kim", city: "seoul" },
    { name: "park", city: "daegu" },
];

console.log(JSON.stringify(person4));