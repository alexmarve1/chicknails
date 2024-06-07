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
    delay: 2000,
  },

});

$('.single-item').slick();
// плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]') //добавляем все ссылки в переменную
for(let anchor of anchors) {                      //прогоняем каждую ссылку в цикле
  anchor.addEventListener('click', function(e){   
    e.preventDefault();//для каждой ссылки при клике удаляется стандартное поведение
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
    });
  })
}
$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__nav').toggleClass('active');
  });
});



