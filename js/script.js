$(document).ready(function () {
    $(".sliderSlick").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        fade: true,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        touchThreshold: 100,
        pauseOnHover: false,
        touchMove: true,
        draggable: true,
        autoplay: true,
        pauseOnHover: true,
        speed: 500,
        autoplaySpeed: 8000,
        arrows: false,
    });
    $('.projects .owl-carousel').owlCarousel({
        items: 3,
        dots: false,
        margin: 30,
        // autoWidth: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
                // nav:true,
            }
        }
    });
    $(".slider-nav .slick-prev ").click(function () {
        $(".sliderSlick").slick("slickPrev");
    });

    $(".slider-nav  .slick-next").click(function () {
        $(".sliderSlick").slick("slickNext");
    });
    $(".mobile_btn").on("click", function () {
        $("nav").toggleClass("navOpen");
        $("html, body").toggleClass("locked");
        $(".mobile_btn").toggleClass("opened");
    });

    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 80);
    });
    $(function () {
        $('.ref')
            .on('mouseenter', function (e) {
                const parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                const parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });
    $(".modal .close").click(function () {
        $(this).closest(".modal").modal("hide");
    });

    const radioButtons = $('.input-section input[type="radio"]');
    const nextButton = $('#next-button');
    const preButton = $('#pre-button');
    const a = false;

    radioButtons.on('click', () => {
        nextButton.prop('disabled', a);
    });

    nextButton.on("click", () => {
        if ($(".input-section").css("display") === "block") {
            $(".input-section").addClass("smoothScrollLeft");
            nextButton.prop('disabled', !a);

            setTimeout(() => {
                $(".form-input2, #pre-button").css("display", "block");
                $(".input-section, .form-input3").css("display", "none");
                $(".form-input2").addClass("smoothScroll100");
            }, 700);

            setTimeout(() => {
                $(".form-input2").removeClass("smoothScroll100");
                // $(".form-input2").removeClass("animate__fadeInRightBig");
                $(".input-section").removeClass("smoothScrollLeft");
            }, 1400);

        }
    });
    preButton.on("click", () => {
        if ($(".form-input2").css("display") === "block") {
            $(".form-input2").addClass("smoothScroll100Reverse");
            setTimeout(() => {
                $(".form-input2, #pre-button").css("display", "none");
                $(".input-section").css("display", "block");
                $(".input-section").addClass("smoothScrollLeftReverse");
                nextButton.text("Sonrakı")
            }, 701);
            setTimeout(() => {
                $(".input-section").removeClass("smoothScrollLeftReverse");
                $(".form-input2").removeClass("smoothScroll100Reverse");
            }, 1401);
        }
    });
    // }
    const forminputs2 = $(".form-input2 input[type='text']");
    forminputs2.on('input', () => {
        const allFilled = forminputs2.toArray().every(input => $(input).val());
        nextButton.prop('disabled', !allFilled);
        if ($(".form-input2").css("display") === "block") {
            if (allFilled) {
                nextButton.on('click', () => {
                    $(".form-input2").addClass("smoothScrollLeft");
                    nextButton.prop('disabled', !a);
                    setTimeout(() => {
                        $(".form-input2").css("display", "none");
                        $(".form-input3").css("display", "block");
                        $(".form-input3").addClass("smoothScroll100");
                        nextButton.text("OK")
                    }, 700);
                    setTimeout(() => {
                        $(".form-input2").removeClass("smoothScrollLeft");
                        $(".form-input3").removeClass("smoothScroll100");
                    }, 1400);
                });
            }
            preButton.on('click', () => {
                $(".form-input3").addClass("smoothScroll100Reverse");
                setTimeout(() => {
                    nextButton.text("Sonrakı")
                    $(".form-input2").css("display", "block");
                    $(".form-input3").css("display", "none");
                    $(".form-input2").addClass("smoothScrollLeftReverse");
                }, 700);
                setTimeout(() => {
                    $(".form-input2").removeClass("smoothScrollLeftReverse");
                    $(".form-input3").removeClass("smoothScroll100Reverse");
                }, 1400);
            });
        };
    });

    const forminputs3 = $(".form-input3 input[type='text']");
    forminputs3.on('input', () => {
        const allFilled2 = forminputs3.toArray().every(input => $(input).val());
        nextButton.prop('disabled', !allFilled2);
    });

    $('label').click(function () {
        $('label').css('opacity', '1');
        $(this).css('opacity', '0.4');
    });
});
