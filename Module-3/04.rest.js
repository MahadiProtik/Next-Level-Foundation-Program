

function add(...numbers){
    let total =0;
    for(num of numbers){
        total+=num;
    }
    return total;
}

console.log(add(1, 2, 5, 20, 25));

let obj = {
    name: "Protik Hashan",
    age: 29,
    address: {
        district: "Noakhali",
        thana: "Begumganj"
    }
}

let {name, ...remaining} = obj

console.log(remaining);

let arr = [5, 8, 15, 20, 50, 40]

let [, , , ...arr1] = arr;

console.log(arr1);

function something(first, ...restOp){
    console.log(first, restOp); //return (first, restOp);
}

console.log(something("Numbers: ", 8, 6, 7, 20, 30));
