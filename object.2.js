// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "mk"
tinderUser.email="mk.goole.com"
// console.log(tinderUser);

const regularUser = {
    email: "das@gmail.com",
    fullname:{
        userfulname:{
            firstname: 'mithleh',
            lastname:'devdas'
    }
    }
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfulname);
console.log(regularUser.fullname.userfulname.lastname);

const obj1={1:"a",2:"b"}
const obj2 = { 2: "a", 4: "b" }
const obj3 = { obj1, obj2 }
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);
const obj5 = { ...obj1, ...obj2 }
console.log(obj5);

const users = [
    {
        id: 1,
        name:'mithlesh'
    },
    {
        id: 2,
        name:'mith'
    },
    {
        id: 3,
        name:'lesh'
    },
]


console.log(users[2].name)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


const course = {
    caursename: 'js-basic',
    techer: 'mk das'
}
const { techer:intector } = course
console.log(intector);