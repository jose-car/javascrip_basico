console.log(document.title);
document.title = 'JosepProgrammmer';
console.log(document.title);
console.log(document.body);
var h1 =  document.getElementsByTagName('h1');

h1[0].innerHTML = 'prueba';
console.log(h1);

var boton = document.getElementsById('boton');
console.log(boton);

boton.addEventListener('click', mensaje);

function mensaje(){
  alert('Mensaje');
}