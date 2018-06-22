let person = {
    name: "Jay",
    hello: function (name2: string) {
        console.log("Hello, " + this.name + name2)
    }
};

person.hello("Lee");