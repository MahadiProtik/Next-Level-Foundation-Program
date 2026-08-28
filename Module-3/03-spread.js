
let fruits = ["orange", "apple"];
fruits.push("banana")

let cart = [...fruits, "tomato", "vegetable"]

cart.push("carrot")
fruits.push("dragon")

console.log(cart);
console.log(fruits);

let personInfo ={
    name: "Mahadi Hashan",
    age: 29,
}

let contactInfo = {
    city: "Noakhali",
    mobile: "0123456789"
}

let fullInfo ={
    ...personInfo,
    ...contactInfo,
    zip: 3821,
    // ...cart
}

console.log(fullInfo);
