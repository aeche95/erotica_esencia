var ratio = 0.745;
$(document).ready(function () {
    var inicio = document.getElementById("inicio");
    var width = window.innerWidth;
    var height = width * ratio;
    inicio.setAttribute("style", "height: " + height + "px");
});

$(document).resize(function () {
    var inicio = document.getElementById("inicio");
    var width = window.innerWidth;
    var height = width * ratio;
    inicio.removeAttribute("style")
    inicio.setAttribute("style", "height: " + height + "px");
});