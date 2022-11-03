'use strict';

const body = document.body;

for (let index = 1; index <= 1000; index++) {
  const button = document.createElement('button');
  button.innerHTML = `botón ${index}`;
  document.body.appendChild(button);
}
