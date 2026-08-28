let name = ["Rahim", "Karim", "Rafiq", "Shafiq"]

let number = [20, 25, 38, 26, 40, 17, 15]

console.log(name[2], number[4] ,number[6], number[7]);

name.push("Arun");
name.push("Tarun");

console.log(name);

name.pop("");
name.pop();
console.log(name);

name.unshift("Jalil");
console.log(name);

name.shift();
console.log(name);

name.splice(2,0,"Hero","Alam");
console.log(name);

name.splice(2,2,"Khairul","Deoyan");
console.log(name);
