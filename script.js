// let isMouseInslider = false;
$(document).ready(function () {
  $(".next").click(function () {
    nextSlide();
  });

  $(".prev").click(function () {
    prevslide();
  });

  // for the first slide
  $(".slide1").click(function () {
    $(".img1").toggle();
    $(".head1").toggle();
    
  });

  function nextSlide() {
    // for the image
    let nowImg = $(".show");
    let prevImg = nowImg.prev();

    if (prevImg.length == 0) {
      prevImg = $(".slide").find(".img").last();
    }
    nowImg.removeClass("show");
    prevImg.addClass("show");

    // for the cirles
    let prevSlide = $(prevImg).index();
    $(".slides").removeClass("current");

    $(".circle")
      .find(".slides:eq(" + prevSlide + ")")
      .addClass("current");

    // for the headline
    let prevheadline = $(prevImg).index();
    $(".head").removeClass("on");

    $(".head-line")
      .find(".head:eq(" + prevheadline + ")")
      .addClass("on");
  }

  function prevslide() {
    // for the image
    let nowImg = $(".show");
    let nextImg = nowImg.next();

    if (nextImg.length == 0) {
      nextImg = $(".slide").find(".img").first();
    }
    nowImg.removeClass("show");
    nextImg.addClass("show");

    // for the cirles
    let nextSlide = $(nextImg).index();
    $(".slides").removeClass("current");

    $(".circle")
      .find(".slides:eq(" + nextSlide + ")")
      .addClass("current");

    // for the headline
    let nextheadline = $(nextImg).index();
    $(".head").removeClass("on");

    $(".head-line")
      .find(".head:eq(" + nextheadline + ")")
      .addClass("on");
  }

  // // to move it auto

  // let currentIndex = 0;
  // let slides = $(".img");
  // let head = $(".head");
  // let circle = $(".slides");

  // // Function to move to the next slide
  // function moveToNextSlide() {
  //   $(slides[currentIndex]).fadeOut(500);
  //   currentIndex = (currentIndex + 1) % slides.length;
  //   $(slides[currentIndex]).fadeIn(500);
  // }

  // function moveToNexthead() {
  //   $(head[currentIndex]).fadeOut(500);
  //   currentIndex = (currentIndex + 1) % head.length;
  //   $(head[currentIndex]).fadeIn(500);
  // }

  // function moveToNextCircle() {
  //   $(circle[currentIndex]).fadeOut(500);
  //   currentIndex = (currentIndex + 1) % circle.length;
  //   $(circle[currentIndex]).fadeIn(500);
  // }

  // // Automatically move to the next slide every 3 seconds
  // setInterval(moveToNextSlide, 3000);
  // setInterval(moveToNexthead, 3000);

  // function moveheadauto() {
  //   let currentIndex = 0;
  //   let head = $(".head");

  //   // Function to move to the next slide
  //   function moveToNexthead() {
  //     $(head[currentIndex]).fadeOut(500);
  //     currentIndex = (currentIndex + 1) % head.length;
  //     $(head[currentIndex]).fadeIn(500);
  //   }

  //   // Automatically move to the next slide every 3 seconds
  //   setInterval(moveToNexthead, 3000);
  // }
  // function movecircleauto() {
  //   let currentIndex = 0;
  //   let circle = $(".slides");

  //   // Function to move to the next slide
  //   function moveToNextCircle() {
  //     $(circle[currentIndex]).fadeOut(500);
  //     currentIndex = (currentIndex + 1) % circle.length;
  //     $(circle[currentIndex]).fadeIn(500);
  //   }

  //   // Automatically move to the next slide every 3 seconds
  //   setInterval(moveToNextCircle, 3000);
  // }
});
