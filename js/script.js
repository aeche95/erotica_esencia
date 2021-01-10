var mismoAncho = false;
var anchoAnterior;
var anchoActual;
var intervalo;
function setWidthAndHeight() {
    var ratio = 0.745;
    var h = window.innerHeight;
    var w = h / ratio;
    //console.log("Height: "+h);
    //console.log("Width: " + w); 
    $("section").css({ "height": h + "px" });
    $("#inicio").css({ "width": window.innerWidth + "px" });
    $("#centrar").css({ "width": w + "px", "height": h+ "px" });
    var iframe_height_str = $("iframe").css("height");
    var iframe_height = iframe_height_str.substr(0, iframe_height_str.length - 2);
    //console.log(iframe_height);
    $("iframe").css({ "width": iframe_height * 1.77778 }); 
}

function getBodyWidth() {
    var widthInicio = $("#inicio")[0].scrollWidth;
    //console.log("Inicio: " + widthInicio);
    var widthContenido = $("#contenido")[0].scrollWidth;
    //console.log("Contenido: " + widthContenido);
    var bodyWidth = widthInicio + widthContenido + 1;
    //console.log("Ancho total: " + bodyWidth);
    anchoAnterior = anchoActual;
    anchoActual = bodyWidth;
    if (anchoActual === anchoAnterior) {
        document.getElementsByTagName("body")[0].style.width = bodyWidth + "px";
        mismoAncho = true;
    }
    else {
        mismoAncho = false;
    }
    checkInterval();
}

function checkInterval() {
    if (mismoAncho) {
        window.clearInterval(intervalo);
        //console.log("Clear");
    }
}

$(document).ready(function () {

    setWidthAndHeight();
   
    $('html, body, *').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });

    var modal = $("#myModal");
    $(".obj").click(function () {
        var image = this;
        console.log(image.src);
        var modalImg = document.getElementById("modalImg");
        modal.css({ "display": "block" });
        modalImg.src = image.src;
    });
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.css({ "display": "none" });
    };
    intervalo = window.setInterval(getBodyWidth, 500);
  
});

$(window).resize(function () {
    setWidthAndHeight();
    getBodyWidth();
    getBodyWidth();
});

 