export function studentHogwarts(){
    let privateScore = 0;
    let name = null;
    this.changeScoreBy = function(points) {
        privateScore += points;
    };

}
export function setName(newName){
        name = newName;
    }
export function rewardStudent(){
        changeScoreBy(1);
    }
export function penalizeStudent(){
        changeScoreBy(-1);
    }
export function getScore() {
        return name + ": " + privateScore;
    }

const harry = new studentHogwarts('Harry');
harry.setName = "Harry";
harry.rewardStudent;
harry.rewardStudent;
harry.rewardStudent;
harry.rewardStudent;
console.log(harry.getScore);
