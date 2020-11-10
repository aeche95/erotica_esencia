var ratio = 0.745;
var height = 0;
$(document).ready(function () {
    var inicio = document.getElementById("inicio");
    var fotos = document.getElementById("fotografias");
    var width = $("#inicio").outerWidth();
    console.log(width);
    height = width * ratio;
    inicio.setAttribute("style", "height: " + height + "px");
    fotos.setAttribute("style", "height: " + height + "px");
});

$(window).resize(function () {
    var inicio = document.getElementById("inicio");
    var width = window.innerWidth;
    height = width * ratio;
    inicio.removeAttribute("style");
    inicio.setAttribute("style", "height: " + height + "px");
    console.log("...");
});