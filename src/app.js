import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function RandomElement(array) {
  return array [Math.floor(Math.random() * array.length)];
}

function generateExcuse() {
let who = ['El vecino', 'Mi perro', 'Un vagabundo', 'El presidente', 'Mi gato'];
let action = ['rompio', 'se comio', 'quemo', 'partio'];
let what = ['mi auto', 'el internet', 'mi proyecto final', 'la tesis', 'mi celular'];
let when = ['cuando estaba regando las plantas', 'cuando saque a pasear a mi marciano', 'mientras hacia yoga con Dalai Lama', 'luego de que fuera a la tienda por los ungüentos de la abuela', 'mientras saltaba en mi trampolin', 'mientras hacia un viaje a Marte', 'cuando estaba en el Capitolio'];

let excuse = `${RandomElement(who)} ${RandomElement(action)} ${RandomElement(what)} ${RandomElement(when)}`;

document.getElementById("excuse").innerText = excuse;
}
window.onload = generateExcuse