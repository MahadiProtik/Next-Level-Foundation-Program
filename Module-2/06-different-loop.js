
let techStack = ["JS", "TS", "Node", "React", "PSQL"]

for(let tech of techStack){
    console.log("Programmig in ", tech);
    
}

console.log("BREAK");


let obj = {
    name: "Rahim Khan",
    age: 25,
    city: "Dhaka"
}

for(ele in obj){
    // console.log(ele);
    // console.log(obj);
    // console.log(obj[ele]);
    console.log(ele + " ==> " + obj[ele]);
    
    
}


let marks = 50;

for(let i = marks; i<60; i++){
    console.log(i);
    
}

for(let j = 0; j <= 20; j++)
{
    if(j % 2 == 0 ){
        continue;
    }
    console.log(j);
    
}

for(let j = 0; j <= 20; j++)
{
    if(j > 10 ){
        break;
    }
    console.log(j);
    
}

