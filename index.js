// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

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

const divBox = document.querySelector('#divBox');

const pinkBox = document.createElement('div');
pinkBox.classList.add('pinkBoxContent');
pinkBox.style.cssText = 'border: black solid 2px; background: pink;';
// pinkBox.textContent = 'Filler';

divBox.appendChild(pinkBox);

const pinkBox1 = document.createElement('h1')

pinkBox1.classList.add('pinkBox1');
pinkBox1.textContent = "I'm in a div!";

pinkBox.appendChild(pinkBox1);

const pinkBox2 = document.createElement('p');

pinkBox2.classList.add('pinkBox2');
pinkBox2.textContent = "Me too!";

pinkBox.appendChild(pinkBox2);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World 2");
});

btn.addEventListener('click', function (e) {
    console.log(e.layerX);
  });

redText.addEventListener('mousedown', function (e) {
    e.target.style.cssText = 'border blue solid 4px; border-radius: 20px; background: pink';
  });