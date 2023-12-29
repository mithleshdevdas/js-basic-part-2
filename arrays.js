const myArr = [10, 20, 30, 40, 50];
console.log("ogArr", myArr);
myArr.push(60)
console.log("pushArr",myArr);
myArr.pop()
console.log("popArr", myArr);
console.log(myArr.includes(100));

console.log(myArr.indexOf(30));

let newArr = myArr.join()
console.log(`og `,myArr);
console.log(`og `, typeof myArr);
console.log('join',newArr);
console.log('join', typeof newArr);

const newArr2 =myArr.slice(1,3)
console.log("A", myArr);
console.log(newArr2);

const newArr3=myArr.splice(1, 3)
console.log(newArr3);
console.log("B", myArr);