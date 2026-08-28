// Feel the real power of literals

//Math Expression

let price = 500;
let quantity =3;

console.log(`Total Price: ${price*quantity} Taka \npay to get it as your own`);

function discountPrice(price){
    return price*0.1;
}

console.log(`You saved: ${discountPrice(price*3)} Taka\nYour bill is ${(price*3) - discountPrice(price*3)}`);


let stock =1;

let stockCheck = stock > 0 ? "In Stock and Quantity: " + stock : "Out of Stock";

console.log(stockCheck);
