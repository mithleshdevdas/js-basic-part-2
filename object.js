let mysbl = Symbol("key1")
const user = {
    "fullname":"devdas",
    name: "mithlesh",
    age: 25,
    email: "mith@google.com",
    id: Symbol('@mk'),
    [mysbl]:"mykey1"
}

// console.log(user.email);
// console.log(user["fullname"]);
// console.log(user["email"]);
// console.log(user[mysbl]);
// Object.freeze(user)
// console.log(user.email = "mk@gmail.com");
// console.log(user);

user.greet = function () {
    console.log('hello user');
}
console.log(user.greet());
user.greet2 = function () {
    console.log(`hello use ${user.name}`);
}
console.log(user.greet2());
console.log(user);




