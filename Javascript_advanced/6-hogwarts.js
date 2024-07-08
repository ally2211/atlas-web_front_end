function studentHogwarts(newName=null) {
    let privateScore = 0;
    let name = newName;

    function changeScoreBy(points) {
        privateScore += points;
        //console.log("privateScore:" + privateScore);
        }
    function setName(newName){
            name = newName;
        }
    function rewardStudent(){
            changeScoreBy(1);
  
        }
    function penalizeStudent(){
            changeScoreBy(-1);
        }
    function getScore() {
            return `${name}: ${privateScore}`;
        }
    return {
        setName: setName,
        rewardStudent: rewardStudent,
        penalizeStudent: penalizeStudent,
        getScore: getScore
    };
}

const harry = new studentHogwarts('Harry');
harry.setName = ("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const Draco = new studentHogwarts('Draco');
Draco.setName = ("Draco");
Draco.rewardStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();
console.log(Draco.getScore());
