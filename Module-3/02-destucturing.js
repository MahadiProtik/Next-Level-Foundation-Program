const student = {
    name: "Mahadi Hashan",
    age: 29,
    address: "Noakhali"
}

let oldSystem = student.name;
console.log(oldSystem);

//New Way ====> Destucturing

let {name, address, age} = student
console.log(age);
console.log(name);

const student1 ={
    name: "Protik Mahadi",
    age:30,
    address: {
        city: "Chittagong",
        zipcode: 3821,
    }
}


let {
    name: std1name,
    address:{city, zipcode},
    age: std1age
} = student1

console.log(std1name, city, zipcode);


const student2 ={
    name: "Protik Mahadi",
    age:30,
    address: {
        city: "Chittagong",
        zipcode: 3821,
    },
    hobies: ["Music", "Coding"]
}

const {
    name: std2name,
    address: {zipcode: stud2zip},
    hobies: [one, two]
} = student2

console.log(two, stud2zip);
