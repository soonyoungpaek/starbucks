$(document).ready(function () {
  var swiper1 = new Swiper(".swiper1", {

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
  // $('.swiper1').on('mouseenter', function() {
  //   swiper1.autoplay.stop();
  // }).on('mouseleave', function() {
  //   swiper1.autoplay.start();
  // });
  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
  });

  var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
  });

  gsap.timeline({
      scrollTrigger: {
        trigger: '.promotion',
        pin: ".promotion",
        start: "top top",
        end: "+=2000",
        scrub: 1,
      }
    })
    .to('.promotion .banner_img1', {
      duration: 3,
      opacity: 0
    })
    .to('.promotion .banner_img2', {
      duration: 3,
      opacity: 1
    });

  gsap.timeline({
      scrollTrigger: {
        trigger: '.evening',
        pin: ".evening",
        start: "top top",
        end: "+=3000",
        scrub: 1,
      }
    })
    .to('.evening .banner_img1', {
      duration: 3,
      opacity: 0
    })
    .to('.evening .banner_img2', {
      duration: 3,
      opacity: 1
    })
    .to('.evening .banner_img2', {
      duration: 3,
      scale: 0,
    })
    .to('.evening .banner_img3', {
      duration: 3,
      yPercent: -150,
    })
    .to('.evening .banner_img4', {
      duration: 3,
      yPercent: -150,
    });

  gsap.timeline({
      scrollTrigger: {
        trigger: '.product',
        pin: '.product',
        start: "top top",
        end: "+=3000",
        scrub: 1,
      }
    })
    .from('.product .banner_img2', {
      duration: 1,
      scale: (1.2),
    })
    .to('.product .banner_img2', {
      duration: 1,
      scale: 1,
    })
    .to(['.product .banner_img3, .product .banner_img1, .product .banner_img4'], {
      duration: 3,
      y: -1200,
    })

  gsap.timeline({
      scrollTrigger: {
        trigger: '.product',
        pin: '.product',
        start: "top top",
        end: "+=3000",
        scrub: 1,
      }
    })
    .to('.product .banner_img2', {
      duration: 3,
      y: 760,
      delay: 3
    })

  function cursorEvent() {
    gsap.set("#cursor", {
      xPercent: -50,
      yPercent: -50
    });
    const ball = document.querySelector("#cursor");
    const pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    const mouse = {
      x: pos.x,
      y: pos.y
    };
    const speed = 0.35;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");
    const target = 'a[href], button, input, label, .header_ham, .c_pointer, .swiper-button-prev, .swiper-button-next, #tab_save, #tab_filter, #tab_library, .swiper-pagination-bullet';

    window.addEventListener("mousemove", e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    document.addEventListener('click', function () {
      ball.classList.add("expand");

      setTimeout(function () {
        ball.classList.remove("expand");
      }, 400)
    })

    $(target).hover(function () {
      ball.classList.add('active');
    }, function () {
      ball.classList.remove('active');
    })

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    magneticBtn()
  }

  function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
  }

  function magnetize(el, e) {
    var mX = e.pageX,
      mY = e.pageY;
    const item = $(el);

    const customDist = item.data('dist') * 20 || 120;
    const centerX = item.offset().left + (item.width() / 2);
    const centerY = item.offset().top + (item.height() / 2);

    var deltaX = Math.floor((centerX - mX)) * -0.45;
    var deltaY = Math.floor((centerY - mY)) * -0.45;

    var distance = calculateDistance(item, mX, mY);

    if (distance < customDist) {
      TweenMax.to(item, 0.5, {
        y: deltaY,
        x: deltaX,

      });
    } else {
      TweenMax.to(item, 0.6, {
        y: 0,
        x: 0,
      });
    }
  }

  function magneticBtn() {
    const mBtn = document.querySelectorAll('.ico.circle');
    mBtn.forEach(function (elem) {
      $(document).on('mousemove touch', function (e) {
        magnetize(elem, e);
      });
    })
  }
  cursorEvent();


  let sw = false;
  $('.ham_menu').click(function () {
    if (sw === false) {
      sw = true;
      $(this).addClass('active');
      $('.menu_area').animate({
        right: 0
      });
    } else {
      sw = false;
      $(this).removeClass('active');
      $('.menu_area').animate({
        right: '-100vw'
      });
    }
  });
});