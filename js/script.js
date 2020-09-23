
$(document).ready(function () {
    var ratio = 0.7567;
    var inicio = document.getElementById("inicio");
    var width = screen.availWidth;
    var height = width * ratio;
    inicio.setAttribute("style","height: "+height+"px")
   console.log(inicio)
});

$(document).onresize(function () {
    var ratio = 0.7567;
    var inicio = document.getElementById("inicio");
    var width = screen.availWidth;
    var height = width * ratio;
    inicio.setAttribute("style", "height: " + height + "px")
    console.log(inicio)

});