let products =[
    {title: "Monitor", price: 8000, instock: true},
    {title: "Headphone", price: 1500, instock: true},
    {title: "keybord", price: 1200, instock: false},
    {title: "mouse", price: 500, instock: true},
]

let totalPrice = products.reduce((acc, current) =>{
    return acc += current.price;
}, 0)
console.log(totalPrice);


console.log(products.sort());
console.log(products.sort((a,b)=> a.price -b.price));
console.log(products.sort((a,b)=> b.price -a.price));


let astPrice = products.filter((p) => p.instock == true).reduce((acc, cur)=>{
    return acc += cur.price
}, 0)

console.log(astPrice);





// let num = [5, 20, 60, 30, 40, 18];
// console.log(num.sort());
// console.log(num.sort((a,b)=>a-b));
// console.log(num.sort((a,b)=>b-a));

