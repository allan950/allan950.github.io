$(function () {
    $("#navbar").fadeOut(0);

    defineNavbarVisual();
    
    //$footer = $("#page-footer").load("components/footer.html");

    $("#page-footer").load("src/components/footer.html", function(res, status, xhr) {
        if (status === "success") {
            if (document.body.clientHeight < window.innerHeight) {
                $(".footer-container").css("position", "absolute");
            }

            $currentBottom = $(window).scrollTop() + innerHeight;
            $footerBottom = parseInt($(".footer-container").position().top + $(".footer-container").height());
            if ($currentBottom >= $(document).height() || $currentBottom >= $footerBottom) {
                $("footer .full-width").addClass("bottom-reached");
            }
        }
    });
    
    $("#navbar").ready(function() {
        $("#navbar").fadeIn(1000);
        $("main").addClass("visible");
    });

    $(window).on("resize", function() {
        defineNavbarVisual();
    });
});

function defineNavbarVisual() {
    if ($(window).width() < 650) {
        $navComponent = "mobile-navbar.html";
    } else {
        $navComponent = "navbar.html";
    }

    $navbar = $("#navbar").load("src/components/" + $navComponent);
}