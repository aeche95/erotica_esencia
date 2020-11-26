function setWidthAndHeight() {
    var ratio = 0.745;
    var h = window.innerHeight;
    var w = h / ratio;
    //console.log("Height: "+h);
    //console.log("Width: " + w); 
    $("section").css({ "height": h + "px" });
    $("#inicio").css({ "width": window.innerWidth + "px" });
    $("#centrar").css({ "width": w + "px", "height": h+"px" });
    var iframe_height_str = $("iframe").css("height");
    var iframe_height = iframe_height_str.substr(0, iframe_height_str.length - 2);
    console.log(iframe_height);
    $("iframe").css({ "width": iframe_height*1.77778})
}

$(document).ready(function () {
    setWidthAndHeight();
    $('html, body, *').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta*30);
        e.preventDefault();
    });
   });

$(window).resize(function () {
    setWidthAndHeight();
});
