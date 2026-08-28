let students = [
    {id:101, name: "Mahadi Hashan", age: 29, department: "Mathemathics" },
    {id:102, name: "Rahim Khan", age: 25, department: "Chemistry" }
]

function addStudent(name, age, dept){
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;
    let newStudent = {
        id:newId,
        name: name,
        age: age,
        department: dept
    }
    students.push(newStudent);
    console.log("Student added Successfully");
    
}

addStudent("Shakil Khan", 30, "Physics")
// console.log(students);

function getAll(){
    for(let student of students){
        console.log(student);
        
    }
}

getAll()

function findStudent(id){
    let foundStudent = null;
    for(let student of students){
        if(student.id == id){
            foundStudent = student;
            break;
        }
    }
    if(foundStudent){
        console.log("Found Student: ", foundStudent);
    }else{
        console.log("404 Not Found");
    }
}

findStudent(102)

function deleteStudent(id){
    let targetStudent = -1;
    for(let i = 0; i < students.length; i++){
        if(students[i].id == id){
            targetStudent = i;
            break;
        }
    }
    if(targetStudent != -1){
        let deleteStudent = students.splice(targetStudent, 1);
        console.log(`DEleted ${deleteStudent[0].name} id : ${targetStudent} Deleted`);
        
    } else{
        console.log("404 Not Found");
        
    }
}

deleteStudent(101);
getAll();