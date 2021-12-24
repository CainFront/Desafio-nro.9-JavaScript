// Programar Boton "Enter"

document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    window.location.replace("../secciones/juego.html");
  }
});

let frases = ["El super mini-Juego flipante"];

let fraseLength = frases.length;
console.log(fraseLength);

let titular = document.querySelector("#tituloTexto");

titular.addEventListener("mouseenter", () => {
  for (let i = 0; i < fraseLength; i++) {
    tituloTexto.innerHTML = frases[i];
  }
});
