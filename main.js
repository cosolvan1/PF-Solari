
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




