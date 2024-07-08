const studentHogwarts = (function studentHogwarts() {
    let privateScore = 0;
    let name = null;
    this.changeScoreBy = function(points) {
        privateScore += points;
    };

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
            return name + ": " + privateScore;
        }
    return {
        setName: setName,
        rewardStudent: rewardStudent,
        penalizeStudent: penalizeStudent,
        getScore: getScore
    };
})();

// const harry = new studentHogwarts('Harry');
// harry.setName = "Harry";
// harry.rewardStudent;
// harry.rewardStudent;
// harry.rewardStudent;
// harry.rewardStudent;
// console.log(harry.getScore);
studentHogwarts.setName("Harry");
studentHogwarts.rewardStudent();
console.log(studentHogwarts.getScore());