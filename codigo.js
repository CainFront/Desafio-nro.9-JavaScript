// Programar Boton "Enter"

document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    window.location.replace("../secciones/juego.html");
  }
});
