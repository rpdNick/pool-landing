jQuery(function ($) {
    $(document).ready(function () {
        //width of scroling line
        function setScrollWisth() {
            var s = $(window).scrollTop(),
                d = $(document).height(),
                c = $(window).height();
            var scrollPercent = Math.round((s / (d - c)) * 100);
            if ($('.progress-bar .proggres')) {
                $('.progress-bar .proggres').css('width', scrollPercent + '%');
            }
        }
        setScrollWisth();
        //when page is scrolled
        $(window).scroll(function () {
            setScrollWisth();
        });
        // preloader
        $('.load-wrapper').fadeOut();
        //animation
        AOS.init();

        // carousel
        if ($(window).width() < 992) {
            startPriceCarusel()
        } else {
            $('.price .price-row').addClass('off');
        }
        if ($(window).width() <= 420) {
            startBenefitsCarusel();
        } else {
            $('.benefits-list').addClass('off');
        }
        // price-row
    });
});

$(window).resize(function () {
    if ($(window).width() < 992 && $(window).width() > 420) {
        startPriceCarusel();
    } else {
        stopPriceCarusel();
    }
    if ($(window).width() <= 420) {
        startBenefitsCarusel();
    } else {
        stopBenefitsCarusel();
    }
});

function startBenefitsCarusel() {
    $('.benefits .benefits-list').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        dots: true,
    });
}

function stopBenefitsCarusel() {
    var owl = $('.benefits-list');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}


function startPriceCarusel() {
    $('.price .price-row').owlCarousel({
        items: 2,
        loop: true,
        center: true,
    });
}

function startDottedPriceCarusel() {
    $('.price .price-row').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        dots: true,
    });
}

function stopPriceCarusel() {
    var owl = $('.price-row');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}