const swiper = new Swiper('.swiper',{
  // direction: 'vertical',
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      },
  pagination: {
    el: '.swiper-pagination', 
  },  
  autoplay: {
    delay: 3000,
  },

});

$('.single-item').slick();

