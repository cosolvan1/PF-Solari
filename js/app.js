"use strict";
import { CardsServicios } from "./cards.js";
import { adicionarServicio } from "./form.js";

async function getService() {
  const res = await fetch("../db/servicios.json");
  const data = await res.json();
  return data;
}
const serviciosDisponibles = await getService();
let currentPageURL = window.location.href;
function inicioApp() {
  if (currentPageURL.includes("adn")) {
    CardsServicios(serviciosDisponibles);
    adicionarServicio(serviciosDisponibles);
  }
}

inicioApp();
