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

    slidesPerView: 2.1,
    spaceBetween: 25,
  });