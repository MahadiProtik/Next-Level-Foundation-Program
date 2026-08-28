
let user1 = {
    name: "Mahadi Hashan",
    address:{
        city: "Chittagong"
    }
}

let user2 = {
    name: "Protik Hashan",
    // No Address
}

//Optional Chaining
console.log(user1.address.city);
console.log(user2?.address?.city);

//nulish colleshing

console.log(user1?.address?.city ?? "Noakhali");
console.log(user2?.address?.city ?? "Noakhali");



