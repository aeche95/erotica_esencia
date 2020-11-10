//Arreglar ancho porque la altura debe ser toda la pantalla. Hacer automatico para cada section con misma altura
function setHeight() {
    var ratio = 0.745;
    var h = window.innerHeight;
    var w = h / ratio;
    console.log("Height: "+h);
    console.log("Width: " + w); 
    $("section").css({ "height": h + "px" });
    $("#inicio").css({ "width": w + "px" });
    $(".obj img, .obj h3").css({ "width": "600px", "height": "400px"});
}

$(document).ready(function () {
    setHeight();
});

$(window).resize(function () {
    setHeight();
});