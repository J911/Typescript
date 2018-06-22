let person = {
    name: "Jay",
    hello: function (name2) {
        console.log("Hello, " + this.name + name2);
    }
};
person.hello("Lee");
