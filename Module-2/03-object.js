//Object

let user ={
    name: "Rahim Khan",
    age: 22,
    address: "Dhaka"
}

console.log(user);
console.log(user.name);
console.log(user["age"]);

delete user.age;
console.log(user);

user.age = 28;
console.log(user);

user.address = {
    city: "Dhaka",
    thana: "Mirpur"
};
console.log(user);

console.log("BREAK");

console.log(Object.entries(user));

console.log(Object.keys(user));






