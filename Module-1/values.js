//Falsy Value: false, NaN, 0, undefined, "", null

let age = 15;
age = 0;
age = 0.000000000000000000000000000000000000000000000000000000001; // true
age = undefined;

if(age){
    console.log("It's Ok");
    
} else{
    console.log("Nothing");
    
}

console.log(typeof(NaN));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(0));
console.log(typeof(true));
console.log(typeof(false));
console.log(typeof(""));
