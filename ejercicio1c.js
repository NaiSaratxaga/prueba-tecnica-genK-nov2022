'use strict';

const body = document.body;

for (let index = 0; index < 10; index++) {
  const button = document.createElement('button');
  button.innerHTML = 'botón';
  document.body.appendChild(button);
}
