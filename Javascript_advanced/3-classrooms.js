function createClassRoom(numbersOfStudents ){
    function studentSeat(seat){
        return Number(seat);
    }
    let students = []; 
    for (let i = 0; i < numbersOfStudents; i++){
        students.push(studentSeat(i+1))
           // console.log(students);
    }
    console.log(students);
    return students;
}

const classRoom = createClassRoom(10);

// exectuting here too
//console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());