$(document).ready(function(){
    $('.testimonial__slider').slick({
        slidesToShow: 2,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
        ],
        autoplay: true,
        autoplaySpeed: 2000
    });
});

let header = document.querySelector('header');

window.addEventListener('scroll', e => {
  let scrollTop = document.documentElement.scrollTop;

  if(scrollTop > 10) {
    header.classList.add('header__bg');
  } else {
    header.classList.remove('header__bg');
  }
})


let menuIcon = document.querySelector('.menu__icon');
let navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', e => {
  if(navbar.classList.contains('expand')) {
    navbar.classList.remove('expand');
  } else {
    navbar.classList.add('expand');
  }
})