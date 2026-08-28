//Foreach, Map

let fruits = ["Mango", "Orange", "Apple", "Banana", "Jackfruit"]

let newFruits = fruits.forEach((f, indx) =>{
    console.log(`${indx} => ${f}`);
    // return (`${indx} => ${f}`)    // Foreach cant return
    
})
// console.log(newFruits);
let newFruits2 = fruits.map((f, indx) =>{
    // console.log(`${indx} => ${f}`);
    return (`${indx} => ${f}`)
    
})
console.log(newFruits2);

let newFruits3 = fruits.map((f) => f.toUpperCase())
console.log(newFruits3);

let newFruits4 = fruits.filter((f) => f.length > 5)
console.log(newFruits4);

