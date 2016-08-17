$(".links a.skillLink").click(function () {
    $(".more").slideToggle();
});

$(".links a.contactLink").click(function () {
    $(".contact").toggleClass("invisible");
});

$("#showMore").click(function (e) {
    e.preventDefault();
    $(this).hide();
    $("#hiddenWork").show(300);
});
