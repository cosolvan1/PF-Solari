class Servicio {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = `${id}.jpg`;
    this.altinf = `imagen del servicio ${nombre}`;
  }
}

const productos = [];

productos.push(new Servicio("1", "Desarrollo Web", 1000));


