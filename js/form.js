import { mensajeSweet, mensajefinal } from "./sweet.js";

let currentPageURL = window.location.href;
const Form1 = document.getElementById("Form1");
const Form2 = document.getElementById("Form2");
const Form3 = document.getElementById("Form3");

const siguiente1 = document.getElementById("siguiente1");
const siguiente2 = document.getElementById("siguiente2");

const Atras1 = document.getElementById("Atras1");
const atras2 = document.getElementById("atras2");

const progreso = document.getElementById("progreso");

const inputNombreCompleto = document.getElementById("nombre");
const inputemail = document.getElementById("email");
const selectServicio = document.getElementById("selectServicio");

const botonFinalizar = document.getElementById("finalizar");

export const adicionarServicio = (data) => {
  selectServicio.innerHTML = `<option value="Elegir">Elige un Servicio</option>`;
  data.forEach((servicio) => {
    let select = "";
    select = `<option value="${servicio.nombre}">${servicio.nombre}</option>`;
    selectServicio.innerHTML += select;
  });
};

if (currentPageURL.includes("adn")) {
  siguiente1.onclick = function () {
    if (inputNombreCompleto.value.length > 0 && inputemail.value.length) {
      Form1.style.left = "-450px";
      Form2.style.left = "40px";
      progreso.style.width = "240px";
    } else {
      mensajeSweet("Falta ingresar datos solicitado!");
    }
  };
  siguiente2.onclick = function () {
    if (selectServicio.value != "Elegir") {
      Form2.style.left = "-450px";
      Form3.style.left = "40px";
      progreso.style.width = "360px";
    } else {
      mensajeSweet("Selecciona un servicio!");
    }
  };

  Atras1.onclick = function () {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progreso.style.width = "120px";
  };
  atras2.onclick = function () {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progreso.style.width = "240px";
  };

  botonFinalizar.onclick = function () {
    mensajefinal(
      inputNombreCompleto.value,
      inputNombreCompleto.value,
      selectServicio.value
    );
  };
}
