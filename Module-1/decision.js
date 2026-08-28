//If Else, Switch, Ternery

let age = 15;
    age = 17.999999999999999; // 9 15 times

if(age>=18){
    console.log("Allowed for Vote");
    
} else {
    console.log("Not Allowed for Vote");
    
}

let Marks = 65;

if(Marks >= 80){
    console.log("A+");
    
} else if(Marks >= 70){
    console.log("A");
    
} else if(Marks >= 60){
    console.log("A-");
    
} else{
    console.log("Need Improvement");
    
}

Marks = 85;

switch (true){
    case Marks >= 80:
        console.log("A+");
        break;
    case Marks >= 70:
        console.log("A");
        break;
    case Marks >= 60:
        console.log("A-");
        break;
    default:
        console.log("Need Improvement");
        break;
        
                
        
}


//Ternery
age = 14;
age = 41;

age >= 18 ? console.log("Voter") : console.log("Not a Voter");

