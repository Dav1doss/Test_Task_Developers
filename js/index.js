// According   ---------------------

$(document).ready(function() {
    $('.list-title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
  
// Slider   ---------------------

const swiper = new Swiper('.swiper', {
     // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1920: {
        slidesPerView: 2.1,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 60,
      }
    }
  });

  // Burger   ---------------------

 document.querySelector(".header__burger-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("header__nav--active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("header__nav--active");
})