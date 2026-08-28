//BMI Calculate

let weight = process.argv[2];
let height = process.argv[3];

// console.log(weight, height);

function calculateBMI(){
    let bmi = weight / (height*height);
    return bmi;
}

console.log(calculateBMI(weight, height));  

console.log("BMI TEST");

let bmi = weight / (height*height);

console.log(`BMI is ${bmi}`);



if (bmi < 18.5 ){
    console.log(`${bmi} is Underweight` );
    
} else if(bmi >= 18.5 && bmi <= 24.9){
    console.log(`${bmi} is Healty Weight`);
    
} else if(bmi > 24.9 && bmi <= 29.9){
    console.log(`${bmi} is OverWeight`);
    
} else{
    console.log(`${bmi} is Obese`);
    
}
