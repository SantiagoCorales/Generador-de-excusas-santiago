let who = ['El vecino', 'Mi perro', 'Un vagabundo', 'El presidente', 'Mi gato'];
let action = ['rompio', 'se comio', 'quemo', 'partio'];
let what = ['mi auto', 'el internet', 'mi proyecto final', 'la tesis', 'mi celular'];
let when = ['cuando estaba regando las plantas', 'cuando saque a pasear a mi marciano', 'mientras hacia yoga con Dalai Lama', 'luego de que fuera a la tienda por los ungüentos de la abuela', 'mientras saltaba en mi trampolin', 'mientras hacia un viaje a Marte', 'cuando estaba en el Capitolio'];

function generarExcusa() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

window.onload = function () {
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generarExcusa();
};