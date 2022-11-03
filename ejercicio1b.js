'use strict';

const body = document.body;
const button1 = document.createElement('button');
button1.innerHTML = '1 botón';
button1.addEventListener(
  'mouseover',
  (event) => (button1.innerHTML = '1 botóN')
);
button1.addEventListener(
  'mouseout',
  (event) => (button1.innerHTML = '1 botón')
);
document.body.appendChild(button1);
