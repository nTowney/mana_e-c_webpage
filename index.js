const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.querySelector('#redText');

const redTextContent = document.createElement('p');
redTextContent.classList.add('redTextContent');
redTextContent.textContent = "Hey, I'm red!";

redText.appendChild(redTextContent);