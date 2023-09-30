"use strict";

export function mensajefinal(nombre, correo, servicio) {
  Swal.fire({
    title: `Gracias por registrarse Sr. ${nombre}, se estara enviando la informacion a su correo: ${correo} sobre el servicio solicitado: ${servicio}`,
    confirmButtonColor: "#6fff8d",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

export function mensajeSweet(texto) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: texto,
    confirmButtonColor: "#6fff8d",
  });
}
