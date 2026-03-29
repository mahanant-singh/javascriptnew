const mysam = Symbol("key1")


const jsUser = {
    name: "mahanant",
    "fullname": "mahanant singh",
    age: "22",
    location: "meerut",
    email: "singhmahanant@gmail.com",
    isloggedIn: false,
    lastlogenDays: ["monday", "saturday"]
    
}
jsUser.email = "singhmahanat@gmail.com"


jsUser.greeting = function () {
    console.log("Hello js user");
}
console.log(jsUser.greeting());


jsUser.greetingtwo = function () {
    console.log(`hello js user${this.name}`);
}
console.log(jsUser.greetingtwo());