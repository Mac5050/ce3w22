
$(window).on("load", start);

function start(){
     //$("body").css("background-color", "pink");
}

$(document).on("click", "ul.nav a", nav);

function nav(e){
    e.preventDefault();
    //alert("Hello world");
    var url = $(this).attr("href");
    $("#content").load(url);
    $("ul.nav a").removeClass("active");
    $(this).addClass("active");

}

