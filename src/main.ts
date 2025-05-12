import "./style.css";

console.log("Hello Typescript!");
let turno = 0;

const numeroTurno = document.querySelector(".numero-turno");
const botonSiguiente = document.querySelector(".boton-siguiente");
const botonAnterior = document.querySelector(".boton-anterior");
const botonResetear = document.querySelector(".boton-reset");
const botonIngresar = document.querySelector(".boton-ingresar");
const IngresarTurno = document.querySelector(".input-turno");

const siguenteTurno = () => {
  turno++;
  if (
    numeroTurno !== null &&
    numeroTurno !== undefined &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    numeroTurno.textContent = turno.toString().padStart(2, "0");
  }
};

if (
  botonSiguiente !== null &&
  botonSiguiente !== undefined &&
  botonSiguiente instanceof HTMLButtonElement
) {
  botonSiguiente.addEventListener("click", () => {
    siguenteTurno();
  });
}

const turnoAnterior = () => {
  if (turno > 0) {
    turno--;
    if (
      numeroTurno !== null &&
      numeroTurno !== undefined &&
      numeroTurno instanceof HTMLHeadingElement
    ) {
      numeroTurno.textContent = turno.toString().padStart(2, "0");
    }
  }
};

if (
  botonAnterior !== null &&
  botonAnterior !== undefined &&
  botonAnterior instanceof HTMLButtonElement
) {
  botonAnterior.addEventListener("click", () => {
    turnoAnterior();
  });
}

const resetearTurno = () => {
  turno = 0;
  if (
    numeroTurno !== null &&
    numeroTurno !== undefined &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    numeroTurno.textContent = turno.toString().padStart(2, "0");
  }
};

if (
  botonResetear !== null &&
  botonResetear !== undefined &&
  botonResetear instanceof HTMLButtonElement
) {
  botonResetear.addEventListener("click", () => {
    resetearTurno();
  });
}

const ingresarTurno = () => {
  if (
    IngresarTurno !== null &&
    IngresarTurno !== undefined &&
    IngresarTurno instanceof HTMLInputElement
  ) {
    turno = parseInt(IngresarTurno.value);
    if (isNaN(turno)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
    if (
      numeroTurno !== null &&
      numeroTurno !== undefined &&
      numeroTurno instanceof HTMLHeadingElement
    ) {
      numeroTurno.textContent = turno.toString().padStart(2, "0");
    }
  }
};

if (
  botonIngresar !== null &&
  botonIngresar !== undefined &&
  botonIngresar instanceof HTMLButtonElement
) {
  botonIngresar.addEventListener("click", () => {
    ingresarTurno();
  });
}
