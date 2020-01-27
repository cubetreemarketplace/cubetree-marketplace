// navbar background color change on scroll

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar.sticky-top");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            header.removeClass('bg-white').addClass("bg-light");
        } else {
            header.removeClass("bg-light").addClass('bg-white');
        }
    });
});