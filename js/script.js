//Arreglar ancho porque la altura debe ser toda la pantalla. Hacer automatico para cada section con misma altura
function setWidthAndHeight() {
    var ratio = 0.745;
    var h = window.innerHeight;
    var w = h / ratio;
    //console.log("Height: "+h);
    //console.log("Width: " + w); 
    $("section").css({ "height": h + "px" });
    $("#inicio").css({ "width": window.innerWidth + "px" });
    $("#centrar").css({ "width": w + "px", "height": h+"px" });
    $(".obj img, .obj h3").css({ "width": "600px", "height": "400px"});
}

function centrar() {
    var ancho_ventana = window.innerWidth;
    var ancho_elemento_str = $("#inicio").css("width");
    var ancho_elemento = ancho_elemento_str.substr(0,ancho_elemento_str.length-2)
    var desplazar = (ancho_ventana - ancho_elemento) / 2;
    console.log("Ventana: " + ancho_ventana);
    console.log("Elemento: " + ancho_elemento);
    console.log("Offset: "+desplazar);
    $("#inicio").css({ "position": "relative", "left": desplazar + "px" });
}

$(document).ready(function () {
    setWidthAndHeight();
    //centrar();
    $('html, body, *').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta*30);
        e.preventDefault();
    });
   });

$(window).resize(function () {
    setWidthAndHeight();
});
