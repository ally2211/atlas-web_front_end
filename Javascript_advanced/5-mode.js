//size, weight, transform, background,
function changeMode(size, weight, transform, background,color){
    return function(){
        document.body.style.fontSize = `${size}`
        document.body.style.fontWeight = `${weight}`
        document.body.style.transform = `${transform}`
        document.body.style.backgroundColor = `${background}`
        document.body.style.color = `${color}`
    }
}
document.getElementById('Spooky').onclick = changeMode('9', 'bold', 'uppercase', 'pink', 'green')
document.getElementById('DarkMode').onclick = changeMode('12', 'bold','capitalize','black', 'white')
document.getElementById('ScreamMode').onclick = changeMode('12', 'normal', 'lowercase', 'white', 'black')
