
var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var siguiente1 = document.getElementById("siguiente1");
var siguiente2 = document.getElementById("siguiente2");
var Atras1 = document.getElementById("Atras1");
var atras2 = document.getElementById("atras2");

var progreso = document.getElementById("progreso");

siguiente1.onclick = function () {
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progreso.style.width = "240px";
}

Atras1.onclick = function () {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progreso.style.width = "120px";
}

siguiente2.onclick = function () {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progreso.style.width = "360px";
}

atras2.onclick = function () {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progreso.style.width = "240px";
}




function App() { }

window.onload = function (event) {
    var app = new App();
    window.app = app;
}

App.prototype.processingButton = function(event) {

    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');

    const carruselWidth = carrusel[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
}

let prevAction = (leftPosition, carruselWidth, track) => {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {

    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
}