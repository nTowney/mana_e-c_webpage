const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.querySelector('#redText');

const redTextContent = document.createElement('p');
redTextContent.classList.add('redTextContent');
redTextContent.textContent = "Hey, I'm red!";
redTextContent.style.color = 'red';

redText.appendChild(redTextContent);

const blueText = document.querySelector('#blueText');

const blueTextContent = document.createElement('h3');
blueTextContent.classList.add('blueTextContent');
blueTextContent.textContent = "I'm a blue h3!";
blueTextContent.style.color = 'blue';

blueText.appendChild(blueTextContent);