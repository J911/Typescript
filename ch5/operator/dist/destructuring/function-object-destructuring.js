function printProfile({ name, nationality = "none" } = { name: "anonymous" }) {
    console.log(name, nationality);
}
printProfile();
printProfile({ name: "Jay" });
printProfile({ name: "Jay", nationality: "Republic of Korea" });
