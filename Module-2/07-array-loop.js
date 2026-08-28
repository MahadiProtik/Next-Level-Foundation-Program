
let Marks = [75, 85, 65, 80, 70, 95, 65];
let max = Marks[0];

for(let i = 1; i < Marks.length; i++){
    if(max < Marks[i]){
        max = Marks[i];
    }
    
}

console.log(max);

let sum = 0;

for(mark of Marks){
    sum += mark;
}

console.log(sum);

let Average = sum / Marks.length;
console.log(Average);

let reMarks = [];

for(let i = Marks.length -1; i >= 0; i--){
    reMarks.push(Marks[i])
}
console.log(reMarks);


