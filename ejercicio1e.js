'use strict';

const body = document.body;

for (let index = 1; index <= 1000; index++) {
  const button = document.createElement('button');
  button.innerHTML = `botón ${index}`;
  button.addEventListener(
    'mouseover',
    (event) => (button.innerHTML = `botóN ${index}`)
  );
  button.addEventListener(
    'mouseout',
    (event) => (button.innerHTML = `botón ${index}`)
  );
  document.body.appendChild(button);
}
