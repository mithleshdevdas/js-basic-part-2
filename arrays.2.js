// @ts-nocheck
const bolly_heros = ['salman', 'akhays', 'amir'];

const south_heros = ['yash', 'prabas', 'allu-arjun']

bolly_heros.push(south_heros)
console.log(bolly_heros);

let allheros =bolly_heros.concat(south_heros)
console.log(allheros);

let allHero = [...bolly_heros, ...south_heros]
console.log(allHero);

let anothor_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

console.log(anothor_array);
console.log(anothor_array.flat(Infinity));

console.log(Array.isArray("mithlesh"));
console.log(Array.from("mithlesh"));
console.log(Array.from({name:"mk"}));
console.log(Array.of({ name: "mk" }));


let score1 = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3));