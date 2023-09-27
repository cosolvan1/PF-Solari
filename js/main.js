class Servicio {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precios = precio;
    this.imagen = `${id}.jgp`;
    this.altinf = `imagen del servicio ${nombre}`;
  }
}

const carrusel1 = document.getElementById("carrusel-1");
const carrusel2 = document.getElementById("carrusel-2");
const serviciosDisponibles = JSON.parse(localStorage.getItem("servicios"));

const CardsServicios = () => {
  carrusel1.innerHTML = "";
  serviciosDisponibles
    .filter((servicio) => parseInt(servicio.id) <= 5)
    .map((servicio) => {
      const { id, nombre, imagen, altinf } = servicio;

      let card = document.createElement("div");
      card.className = "carrusel-track";
      card.innerHTML = `

            <div class="carrusel">
              <div>
                <a href="/">
                  <h4><small>${nombre}</small></h4>
                  <picture>
                    <img src="/images/${imagen}" alt="${altinf}" />
                  </picture>
                </a>
              </div>
            </div>
      `;

      carrusel1.appendChild(card);
    });

  carrusel2.innerHTML = "";
  serviciosDisponibles
    .filter((servicio) => parseInt(servicio.id) > 5)
    .map((servicio) => {
      const { id, nombre, imagen, altinf } = servicio;

      let card = document.createElement("div");
      card.className = "carrusel-track";
      card.innerHTML = `
  
              <div class="carrusel">
                <div>
                  <a href="/">
                    <h4><small>${nombre}</small></h4>
                    <picture>
                      <img src="/images/${imagen}" alt="${altinf}" />
                    </picture>
                  </a>
                </div>
              </div>
        `;

      carrusel2.appendChild(card);
    });
};

CardsServicios();
