$(".links a.skillLink").click(function () {
    $(".more").slideToggle();
});

$(".links a.contactLink").click(function () {
    if($(".contact").css("opacity") == 0) {
        $(".contact").css("opacity", "1");
    }
    else {
        $(".contact").css("opacity", "0");
    }
});

$("#showMore").click(function (e) {
    e.preventDefault();
    $(this).hide();
    $("#hiddenWork").slideToggle();
});
