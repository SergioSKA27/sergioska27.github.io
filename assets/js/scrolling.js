$(document).ready(function() {
    $(".circle__btn").on("click", function() {
        const targetId = $(this).attr("id");
        const targetElement = $("#" + targetId);

        if (targetElement.length) {
            $("html, body").animate({
                scrollTop: $(document).height() - $(window).height()
            }, 1000); // Duración del scroll en milisegundos (ajusta según tus preferencias)
        }
    });
});
