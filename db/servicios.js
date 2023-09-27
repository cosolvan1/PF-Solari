class Servicio {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = `${id}.jpg`;
    this.altinf = `imagen del servicio ${nombre}`;
  }
}

// const servicios = [];

// servicios.push(new Servicio("1", "Diseño Gráfico", 1200));
// servicios.push(new Servicio("2", "UX/UI", 800));
// servicios.push(new Servicio("3", "Branding", 1200));
// servicios.push(new Servicio("4", "Comunicación Coorporativa", 600));
// servicios.push(new Servicio("5", "Branding", 900));
// servicios.push(new Servicio("6", "Brain Storming", 300));
// servicios.push(new Servicio("7", "Fotografía", 850));
// servicios.push(new Servicio("8", "Packaging", 1000));
// servicios.push(new Servicio("9", "Logística", 400));
// servicios.push(new Servicio("10", "Desarrollo Web", 2000));

//fetch local
fetch("../db/servicios.json")
  .then((response) => response.json())
  .then((data) => {
    JSON.parse(localStorage.getItem("servicios")) ||
      localStorage.setItem("servicios", JSON.stringify(data));
  })
  .catch((err) => console.log("fallida", err));
