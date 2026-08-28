// const { version } = require("react");

let student = {
    name: "Rahim Khan",
    id: 101,
    marks: {
        bangla: 75,
        english: 80,
        math: 90
    }
}

// console.log(student.marks.math);

let totalMarks = 0;
let totalSubject = 0;

for(let subject in student.marks){
    totalMarks = totalMarks + student.marks[subject];
    totalSubject++;
}

console.log(totalMarks, totalSubject);

let avg = (totalMarks/totalSubject).toFixed(2);
console.log(avg);

if(avg>=80){
    console.log("You have got", avg + "% marks");
    
}else{
    console.log("You should better next time");
    
}

//task: total bill or price and total item 

 let cart = [
    
    {name: "shirt",  price: 1200,  quantity: 2 },
     {name: "pants",  price: 1800,  quantity: 1 },
     {name: "shocks", price: 150,   quantity: 3 },

 ]

 console.log(cart[0].price);

 let totalPrice = 0;
 let totalItem = 0;

 for(let item in cart ){
    totalPrice += item.price * item.quantity;
    totalItem += item.quantity;
 }

 console.log("Total Price: " + totalPrice + " Taka");
 console.log("Total items: " + totalItem);
 







// let test = [12, 17, 20, {lang:"JS"}, "PHP", {program: ["React", "Next JS"], version: 5}, 51]

// console.log(test);
