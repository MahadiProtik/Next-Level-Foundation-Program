// Global Scope => Local Scope => Functopn Scope => Block Scope

{
    let age = 20;
    console.log(age);
    
}

function helloAge(){
    age = 25;
    return age;
}

helloAge();
console.log(age);

{
    let num = 50;
    console.log(num);
    
}

{
    let num = 55;
    console.log(num);
}
