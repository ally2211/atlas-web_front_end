const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function(){
        return this.width * this.length;
    }
}
const functionGetArea = roomDimensions.getArea;
const boundGetArea = functionGetArea.bind(roomDimensions);
console.log(boundGetArea());