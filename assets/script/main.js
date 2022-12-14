let Frontend = document.querySelector('span');
let Desing = document.querySelector('a:nth-of-type(1)');
let num3 = document.querySelector('a:nth-of-type(2)');
let Development = document.querySelector('a:nth-of-type(3)');
let sprint5 =document.querySelector('a:nth-of-type(4)');
let fix =document.querySelector('a:nth-of-type(5)');
let the =document.querySelector('a:nth-of-type(6)');
let flow =document.querySelector('a:nth-of-type(7)');
let user =document.querySelector('a:nth-of-type(8)');
let interface =document.querySelector('a:nth-of-type(9)');
let interaction = document.querySelector('a:nth-of-type(11)');


Frontend.addEventListener('click', animation1);
Frontend.addEventListener('animationend', animation1);

Desing.addEventListener('click', animation2);
Desing.addEventListener('animationend', animation2);

num3.addEventListener('click', animation3);
num3.addEventListener('animationend', animation3)

Development.addEventListener('click', animation4);
Development.addEventListener('animationend', animation4);

sprint5.addEventListener('click', animation5);
sprint5.addEventListener('animationend', animation5);

fix.addEventListener('click', animation6);
fix.addEventListener('animationend', animation6);

the.addEventListener('click', animation7);
the.addEventListener('animationend', animation7);

flow.addEventListener('click', animation8);
flow.addEventListener('animationend', animation8);

user.addEventListener('click', animation9);
user.addEventListener('animationend', animation9);

interface.addEventListener('click', animation10);
interface.addEventListener('animationend', animation10);

interaction.addEventListener('click', jumpHandler);
interaction.addEventListener('animationend', jumpHandler);

function jumpHandler() {
  interaction.classList.toggle('jump');
}

function animation1(){
  Frontend.classList.toggle('anima1');  
}

function animation2(){
  Desing.classList.toggle('anima2');
}

function animation3(){
 num3.classList.toggle('anima3');
}

function animation4(){
  Development.classList.toggle('anima4');
}

 function animation5(){
  sprint5.classList.toggle('anima5');
}

function animation6(){
  fix.classList.toggle('anima6');
}

function animation7(){
  the.classList.toggle('anima7');
}

function animation8(){
  flow.classList.toggle('anima8');
}

function animation9(){
  user.classList.toggle('anima9');
}
 
function animation10(){
  interface.classList.toggle('anima10');
}