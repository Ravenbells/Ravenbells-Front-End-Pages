const launchDate = new Date("November 26, 2021 00:00:00 UTC").getTime();

// Context object
const c = {
  context: {},
  values: {},
  times: {}
};


(function() {
  // Get displayed values
  c.values.seconds = document.getElementById("seconds-value");
  c.values.minutes = document.getElementById("minutes-value");
  c.values.hours = document.getElementById("hours-value");
  c.values.days = document.getElementById("days-value");

  setInterval(function () {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Get distance from now to launchDate
    const distance = launchDate - now;

    // Time calculations
    c.times.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    c.times.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    c.times.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    c.times.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    c.values.days.innerHTML = c.times.days;
    c.values.hours.innerHTML = c.times.hours;
    c.values.minutes.innerHTML = c.times.minutes;
    c.values.seconds.innerHTML = c.times.seconds;
  }, 1000);
})();

//Go to https://swiperjs.com/get-started for more info
//or https://github.com/nolimits4web/swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  autoHeight: true,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 1000,
    pauseOnMouseEnter: true,
  },
  
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});

//Scroll Top
$('#signup-button').on('click', function(e) {
  e.preventDefault();
  $(window).width() <= 576 ? $('html, body').animate({scrollTop: 1250}, 300) : $('html, body').animate({scrollTop: 0}, 300);
});
