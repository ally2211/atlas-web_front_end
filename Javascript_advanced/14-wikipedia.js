function createElement(data) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = data;
    document.body.appendChild(newParagraph);
}

//function to display data
function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.onreadystatechange = function() {
        if (xhr.status ===4){
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const extractText = response.extract;
                alert(extractText);
                callback(extractText);
            }
        }
        else {
            console.error('Error fetching data:', xhr.statusText);
        }
    }
    xhr.open('GET', url,true);
    xhr.send();
}
queryWikipedia(createElement);
