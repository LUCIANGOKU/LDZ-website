    var menuEnabled = false;

$("button").click(function() {
    if (menuEnabled) {
        $("#box").toggle( "slide" );
        menuEnabled = false;
        
    } 

    else {
        $("#box").toggle( "slide" );
        $("html").css("overflow-x", "hidden");
        menuEnabled = true;

    }
});
