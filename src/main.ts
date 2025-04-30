import "./style.css";

console.log("Hello Typescript!");

let numeroTurno = document.querySelector(".numero-turno") as HTMLElement;
let botonSiguiente = document.querySelector(
  ".boton-siguiente"
) as HTMLButtonElement;
let botonAnterior = document.querySelector(
  ".boton-anterior"
) as HTMLButtonElement;
let botonResetear = document.querySelector(".boton-reset") as HTMLButtonElement;
let IngresarTurno = document.querySelector(".input-turno") as HTMLInputElement;

botonSiguiente.addEventListener("click", () => {
  let numeroTurnoActual = parseInt(numeroTurno.innerText);
  numeroTurnoActual += 1;
  numeroTurno.innerText = numeroTurnoActual.toString().padStart(2, "0");
});

botonAnterior.addEventListener("click", () => {
  let numeroTurnoActual = parseInt(numeroTurno.innerText);
  if (numeroTurnoActual > 0) {
    numeroTurnoActual -= 1;
    numeroTurno.innerText = numeroTurnoActual.toString().padStart(2, "0");
  } else {
  }
});

botonResetear.addEventListener("click", () => {
  numeroTurno.innerText = "00";
});

IngresarTurno.addEventListener("input", () => {
  let nuevoTurno = parseInt(IngresarTurno.value);
  if (!isNaN(nuevoTurno) && nuevoTurno >= 0) {
    numeroTurno.innerText = nuevoTurno.toString().padStart(2, "0");
  } else {
    numeroTurno.innerText = "00";
  }
});
