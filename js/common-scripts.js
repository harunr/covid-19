(function ($) {
    $(function () {

        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".mobi-nav-wrap").slideToggle(500)
        });

        $(window).scroll(function () {
            var sc = $(window).scrollTop()
            if (sc > 50) {
                $("header").addClass("collapse")
                $("body").addClass("sticky")
            } else {
                $("header").removeClass("collapse")
                $("body").removeClass("sticky")
            }
        });
        
        
        //Cart Wrap
        
        $('.cart-counter').click(function () {
            $("body").addClass("cartShown");
        });
        
        $('.cart-arrow').click(function () {
            $("body").removeClass("cartShown");
        });
        
        

        $('.product-slider-wrap').slick({
            autoplay: false,
            autoplaySpeed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            buttons: false,

            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });

        //Testimonial Slider
        if ($('.testimonial-item-wrap').length) {
            $('.testimonial-item-wrap').slick({
                arrows: false,
                infinite: false,
                autoplay: false,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.testimonial-item-wrap').slick('resize');

            });
        }

        $('.scroll-btn a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 900, 'linear');
        });


        var window_width = $(window).width();
        var window_height = $(window).height();

        $(window).on('load', function () {
            if (window_width > 601) {
                $('.products-bubbles-left .products-bubbles, .products-bubbles-right .products-bubbles, .ingredients-bubbles-left .products-bubbles, .ingredients-bubbles-right .products-bubbles').each(cereal_plot_init);
                $('.products-bubbles-left .products-bubbles, .products-bubbles-right .products-bubbles, .ingredients-bubbles-left .products-bubbles, .ingredients-bubbles-right .products-bubbles').each(cereal_plot_init_story);
            }

        })

        function cereal_plot_init() {
            var plot = $(this),
                cereal = plot.find('figure');

            plot.each(function () {
                var _this = $(this);
                _this.data('top', Math.floor(_this.offset().top));
            }).show();

            cereal.each(function () {
                $(this).attr('data-multiply', Math.floor(Math.random() * 2) + 1)
            });

            function plot_mousemove(e) {
                var x = Math.floor((e.screenX - ((e.screenX > window_width / 2) ?
                        window_width / 2 :
                        window_width / 2 - plot.offset().left)) * .1),
                    y = Math.floor((e.screenY - window_height / 2) * .1)

                cereal.each(function (i) {
                    let _this = $(this);
                    let m = _this.data('multiply');

                    _this.css({
                        '-webkit-transform': `translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`,
                        'transform': `translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`
                    })
                })
            }
            $(window).on('mousemove', plot_mousemove);

            function plot_scroll() {
                var scroll_top = $(window).scrollTop(),
                    y = -(Math.floor((scroll_top - plot.data('top')) * 0.3));

                if (
                    scroll_top > plot.data('top') - window_height &&
                    scroll_top < plot.data('top') + window_height * 2) {

                    plot.find('figure').each(function (i) {
                        let _this = $(this);
                        let m = _this.data('multiply');
                        _this.find('img').css({
                            '-webkit-transform': `rotate(${y*m*1}deg)`,
                            'transform': `rotate(${y*m*1}deg)`
                        })
                    })
                }
            }
            plot_scroll();
            $(window).on('scroll', plot_scroll);
        }

        function cereal_plot_init_story() {
            var plot = $(this),
                cereal = plot.find('figure');

            plot.each(function () {
                var _this = $(this);
                _this.data('top', Math.floor(_this.offset().top));
            }).show();

            cereal.each(function () {
                $(this).attr('data-multiply', Math.floor(Math.random() * 2) + 1)
            });

            function plot_mousemove(e) {
                var x = Math.floor((e.screenX - ((e.screenX > window_width / 2) ?
                        window_width / 2 :
                        window_width / 2 - plot.offset().left)) * .1),
                    y = Math.floor((e.screenY - window_height / 2) * .1)

                cereal.each(function (i) {
                    let _this = $(this);
                    let m = _this.data('multiply');

                    _this.css({
                        '-webkit-transform': `translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`,
                        'transform': `translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`
                    })
                })
            }
            $(window).on('mousemove', plot_mousemove);

            function plot_scroll() {
                var scroll_top = $(window).scrollTop(),
                    y = -(Math.floor((scroll_top - plot.data('top'))));

                if (
                    scroll_top > plot.data('top') - window_height &&
                    scroll_top < plot.data('top') + window_height) {

                    plot.find('figure').each(function (i) {
                        let _this = $(this);
                        let m = _this.data('multiply');
                        _this.find('img').css({
                            '-webkit-transform': `rotate(${y*m*1}deg)`,
                            'transform': `rotate(${y*m*1}deg)`

                        })
                    })
                }
            }
            plot_scroll();
            $(window).on('scroll', plot_scroll);
        }

        //Image Slider 
        function maxVal(val, itsmax) {
            if (val <= itsmax && val >= 0) return val
            else if (val < 0) return 0
            else return itsmax;
        }

        $(".expand-thumb-passionfruit").each(function () {
            var slider = $(this).parents(".artisanal-gelato-expand-thumbs").find(".artisanal-expand-icon");
            var img = $(this).find("img");

            var slidef = function () {
                var e = window.event;
                var x = img.offset().left;
                img.parents('.expand-thumb').width(maxVal(e.pageX - x, $(".expand-thumb").width()));
                slider.css("left", (maxVal(e.pageX - x, $(".expand-thumb").width())) + "px")
            }

            //Mouse was pressed
            slider.mousedown(function (e) {
                e.preventDefault();
                $(window).on("mousemove.slideev", this, slidef);
            });

            $(window).mouseup(function (e) {
                e.preventDefault();
                $(window).off("mousemove.slideev");
            });

            //Finger is swiping
            slider.on("touchmove", function (e) {
                e.preventDefault();
                var t = e.touches[0];
                var x = img.offset().left;
                img.parents('.expand-thumb').width(maxVal(t.pageX - x, $(".expand-thumb").width()));
                slider.css("left", (maxVal(t.pageX - x, $(".expand-thumb").width())) + "px")
            })
        });
        // End venue-carousel function 


        if ($(window).width() > 767) {
            var $pos_elements = $('.artisanal-gelato-wrap, .ingredients-wrap, .main-footer-wrap');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($pos_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                        $element.addClass('stratParallax');
                    } else {
                        $element.removeClass('stratParallax');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');


            $(window).scroll(function () {

                var wScroll = $(this).scrollTop()

                $(".products-bubbles, .overlay").css({
                    "transform": "translate(0px, -" + wScroll / 3 + "px)"
                })

            })


        };

        // Product Page
        if ($(".product-page-content").length) {
            $('body').addClass('product-page');
        }

        if ($(window).width() > 767) {
            $('.product-dropdown-wrap h4').click(function () {
                $('.product-dropdown-item').fadeToggle()
            })
        }

        if ($(window).width() < 768) {
            $('.product-dropdown-wrap h4').click(function () {
                $('.product-dropdown-item').slideToggle()
            })
        }

        var $slider = $('.product-random-slider-wrap');
        var $progressBar = $('.progress');
        var $progressBarLabel = $('.slider__label');

        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc);

            $progressBarLabel.text(calc + '% completed');
        });

        $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 400,
            infinite: false,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                    },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                    }

                ]
        });


        if ($(".product-styled-select").length) {
            $('.product-styled-select').selectric();
        }


        $('.shop-tab-inner ul li:first a').addClass('tab-information');
        $('.shop-item-tab-info').hide();
        $('.shop-item-tab-info').eq(0).show();
        // Click function	
        $('.shop-tab-inner ul li a').click(function (e) {
            e.preventDefault();
            $('.shop-tab-inner ul li a').removeClass('tab-information');
            $(this).addClass('tab-information');
            $('.shop-item-tab-info').hide();

            var activeTab = $(this).attr('rel');
            $('.' + activeTab).fadeIn().siblings().hide();
        });

        // About Us
        $('.story-tab-item-wrap-inner:first-child').fadeIn();
        $('.story-tab-triger-wrap ul li:first-child').addClass('tab-active');

        // Change tab class and display content
        $('.story-tab-triger-wrap ul li a').on('click', function (event) {
            event.preventDefault();
            $('.story-tab-triger-wrap ul li').removeClass('tab-active');
            $(this).parent().addClass('tab-active');
            $('.story-tab-item-wrap-inner').fadeOut();
            $($(this).attr('href')).fadeIn();
        });


        $(".acordion-item").each(function () {
            var $this = $(this);
            $this.find(" > .acordion-heading span").on("click touch", function () {
                $(".acordion-item").removeClass("accordion-active")
                $(".acordion-content").slideUp();
                if ($this.find(".acordion-content:visible").length) {
                    $(".acordion-item").removeClass("accordion-active")
                    $(".acordion-content").slideUp();
                } else {
                    $this.addClass("accordion-active")
                    $(".acordion-content").slideUp();
                    $this.find(" > .acordion-content").slideDown();
                }
            })
        })




        // Accordion Function
        $(".career-accordion-item").each(function () {
            var $this = $(this);
            $this.find(" > h4").on("click touch", function () {
                $(".career-accordion-item").removeClass("active")
                $(".career-accordion-text").slideUp();
                if ($this.find(".career-accordion-text:visible").length) {
                    $(".career-accordion-item").removeClass("active")
                    $(".career-accordion-text").slideUp();
                } else {
                    $this.addClass("active")
                    $(".career-accordion-text").slideUp();
                    $this.find(" > .career-accordion-text").slideDown();
                }
            })
        })






    }) // End ready function.


    if ($('.info-slider').length) {

        $('.info-slider').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });

        $(window).on('resize', function () {
            $('.info-slider').slick('resize');
        });
    }

    var mac = 0;
    if (navigator.userAgent.indexOf('Mac') > 0) {
        mac = 1;
    } else {
        mac = 0;
    }

    if (1 == mac) {
        $('body').addClass('mac-os');
    } else {
        $("body").addClass('win-os');
    }






    $('.back-top-btn, .back-to-top-btn a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });



 

})(jQuery)


// Product Page
function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}