
let fruits = ["Mango", "Orange", "Apple", "Banana", "Jackfruit"]

let findFruit = fruits.find((f) => f.length > 5)
console.log(findFruit);

let findMango = fruits.includes("Mango");
console.log(findMango);


let students =[
    { name:"Mahadi", marks:85 },
    { name:"Hashan", marks:75 },
    { name:"Protik", marks:45 },
    { name:"Mahadi", marks:60 },
]

let checkMark = students.some((s) => s.marks > 82);
console.log(checkMark);

let checkMark2 = students.every((s) => s.marks > 44);
console.log(checkMark2);
