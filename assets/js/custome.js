    
var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    slidesPerView:  3,
    centeredSlides: true, 
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
    },
    breakpoints: {
    768: {
        slidesPerView: 1,
    },
    1200: {
        slidesPerView: 2,
    },
    },
});


var rev = $(".rev_slider");
rev
  .on("init", function (event, slick, currentSlide) {
    var cur = $(slick.$slides[slick.currentSlide]),
      next = cur.next(),
      next2 = cur.next().next(),
      prev = cur.prev(),
      prev2 = cur.prev().prev();
    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    prev2.addClass("slick-sprev2");
    next2.addClass("slick-snext2");
    cur
      .removeClass("slick-snext")
      .removeClass("slick-sprev")
      .removeClass("slick-snext2")
      .removeClass("slick-sprev2");
    slick.$prev = prev;
    slick.$next = next;
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    console.log("beforeChange");
    var cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass("slick-sprev");
    slick.$next.removeClass("slick-snext");
    slick.$prev.prev().removeClass("slick-sprev2");
    slick.$next.next().removeClass("slick-snext2");
    (next = cur.next()), (prev = cur.prev());
    //prev2.prev().prev();
    //next2.next().next();
    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    prev.prev().addClass("slick-sprev2");
    next.next().addClass("slick-snext2");
    slick.$prev = prev;
    slick.$next = next;
    cur
      .removeClass("slick-next")
      .removeClass("slick-sprev")
      .removeClass("slick-next2")
      .removeClass("slick-sprev2");
  });

rev.slick({
  speed: 1000,
  arrows: false,
  dots: false,
  focusOnSelect: true,
//   prevArrow: "<button> prev</button>",
//   nextArrow: "<button> next</button>",
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0",
  swipe: true,
  customPaging: function (slider, i) {
    return "";
  }
  /*infinite: false,*/
});




  