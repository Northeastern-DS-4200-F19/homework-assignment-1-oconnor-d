const image = document.querySelector('img');

image.onclick = function() {
    const imageSrc = image.getAttribute('src');
    if(imageSrc === 'images/firefox-icon.png') {
        image.setAttribute('src','images/firefox2.png');
    } else {
        image.setAttribute('src','images/firefox-icon.png');
    }
}

const button = document.querySelector('button');
const heading = document.querySelector('h1');

function setUserName() {
    const name = prompt('Please enter your name:');

    if (!name || name === null) {
        setUserName();
    } else {
        localStorage.setItem('name', name);
        heading.textContent = 'Mozilla is cool, ' + name;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    heading.textContent = 'Mozilla is cool, ' + storedName;
}

button.onclick = setUserName;