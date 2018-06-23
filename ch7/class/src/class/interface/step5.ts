interface Person {
    name: string;
    city: string;
}
interface PersonItems extends Array<Person> { }

let person5: PersonItems = [
    { name: "lee", city: "daejeon" },
    { name: "kim", city: "seoul" },
    { name: "park", city: "daegu" },
];

console.log(JSON.stringify(person5));