function createClassRoom(numbersOfStudents ){
    function studentSeat(seat){
        return Number(seat);
    }
    let students = []; 
    for (let i = 0; i < numbersOfStudents; i++)
        students[i] = studentSeat(i + 1);
    return students;
}

let classRoom = createClassRoom(10);
