
//size, weight, transform, background,
function changeMode(size, weight, transform, background,color){
    return function(){
        document.body.style.fontSize = `${size}`
        document.body.style.fontWeight = `${weight}`
        document.body.style.textTransform = `${transform}`
        document.body.style.backgroundColor = `${background}`
        document.body.style.color = `${color}`
    }
}
function main(){

    document.addEventListener('DOMContentLoaded', (event) => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Welcome Atlass!';
        document.body.appendChild(newParagraph);

        const newButton1 = document.createElement('button');
        newButton1.id = "Spooky";
        newButton1.textContent = "Spooky";
        document.body.appendChild(newButton1);

        const newButton2 = document.createElement('button');
        newButton2.id = "DarkMode";
        newButton2.textContent = "Dark Mode";
        document.body.appendChild(newButton2);

        const newButton3 = document.createElement('button');
        newButton3.id = "ScreamMode";
        newButton3.textContent = "Scream Mode";
        document.body.appendChild(newButton3);

        const Spooky = document.getElementById('Spooky').onclick = changeMode('9', 'bold', 'uppercase', 'pink', 'green')
        const DarkMode = document.getElementById('DarkMode').onclick = changeMode('12', 'bold','capitalize','black', 'white')
        const ScreamMode = document.getElementById('ScreamMode').onclick = changeMode('12', 'normal', 'lowercase', 'white', 'black')
    });
}

main();

//const Spooky = document.getElementById('Spooky');
//Spooky.addEventListener('click', changeMode('9', 'bold', 'uppercase', 'pink', 'green'));

