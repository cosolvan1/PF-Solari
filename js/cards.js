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

export const CardsServicios = (data) => {
  carrusel1.innerHTML = "";
  data
    .filter((servicio) => parseInt(servicio.id) <= 5)
    .map((servicio) => {
      const { id, nombre, imagen, altinf } = servicio;

      let card = document.createElement("div");
      card.className = "carrusel-track";
      card.innerHTML = `

            <div class="carrusel">
              <div>
                <a href="#popupcontainer">
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
  data
    .filter((servicio) => parseInt(servicio.id) > 5)
    .map((servicio) => {
      const { id, nombre, imagen, altinf } = servicio;

      let card = document.createElement("div");
      card.className = "carrusel-track";
      card.innerHTML = `
  
              <div class="carrusel">
                <div>
                  <a href="#popupcontainer">
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
