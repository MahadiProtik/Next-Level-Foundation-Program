//Nested JS

let user = {
    name: "Rahim Khan",
    age: 25,
    address: {
        city: "Dhaka",
        code: "0000",
        thana: "Mirpur"
    }
}

console.log(user);
console.log(user["address"]["code"]);
console.log(user["address"].thana);
console.log(user.address["city"]);
console.log(user.address.code)

let entry = Object.entries(user);

console.log(entry);
console.log(entry[1]);
console.log(entry[1][0]);
console.log(entry[1][1]);
console.log("BREAK");
console.log(entry[1][1], user.name);

let student =[
    {
        name : "Rahim",
        id: 101,
        address : {
            city : "Dhaka",
            thana : "Ramna",
            phone: "0123456789"
        }
    },
    {
        name : "Karim",
        id: 102,
        address : {
            city : "Dhaka",
            thana : "Miepur",
            phone: "0123456789"
        }
    },
    {
        name : "Mahim",
        id: 103,
        address : {
            city : "Dhaka",
            thana : "Badda",
            phone: "0123456789"
        }
    }
]

delete student[2].id;
console.log(student);

delete student[1]["address"]["phone"]
console.log(student);

student[2].address.phone  = "325698741";

console.log(student);
