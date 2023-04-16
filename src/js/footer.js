function checkFooterPosition() {

    if (document.body.clientHeight < window.innerHeight) {
        $(".footer-container").css("position", "absolute");
    } else {
        $(".footer-container").css("position", "relative");
    }

    $currentBottom = $(window).scrollTop() + innerHeight;
    $currentBottom = Math.ceil($currentBottom);
    $footerBottom = parseInt($(".footer-container").position().top + $(".footer-container").height());
    if ($currentBottom >= $(document).height() || $currentBottom >= $footerBottom) {
        $("footer .full-width").addClass("bottom-reached");
    } else {
        if ($("footer .full-width").hasClass("bottom-reached")) {
            $("footer .full-width").removeClass("bottom-reached");
        }
    }
}


$(function () {
    $("#navbar").fadeOut(0);
    $navbar = $("#navbar").load("components/navbar.html");
    $footer = $("#page-footer").load("components/footer.html");

    $("#navbar").ready(function () {
        $("#navbar").fadeIn(1000);
        $("main").addClass("visible");

        $(window).scroll(function () {
            checkFooterPosition();
        })
    });

});