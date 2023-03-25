const sliders_game = document.querySelector('.sliders_game')
const box_game = document.querySelectorAll('.box_game');
const clone = document.querySelectorAll('.box_game');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const text = document.querySelectorAll('.text_game');
let currentSlide = 0;
let Slide_index = 0;
let autoSlideInterval;

box_game[0].className += " active_game";
text[0].className += " active_text";


prev.addEventListener('click', () => {
  if (currentSlide <= 0) {
      Slide_index--;
      changeSlide(box_game.length - 1);
      console.log(Slide_index)
    } else {
      Slide_index--;
      changeSlide(currentSlide - 1);
      console.log(Slide_index)
    }
});

next.addEventListener('click', () => {
  if (currentSlide >= box_game.length - 1) {
      Slide_index++;
      changeSlide(0);
      console.log(Slide_index)

    } else {
      Slide_index++;
      changeSlide(currentSlide + 1);
      console.log(Slide_index)

    }
});

function slide(){
    if (Slide_index > 0){
        sliders_game.style.transform = `translateX(-${Slide_index * 100}%)`;
    }
    if (Slide_index < 0){
      sliders_game.style.transform = `translateX(${Math.abs(Slide_index) * 100}%)`;
    }
    if (Slide_index === 0){
      sliders_game.style.transform = `translateX(${0}%)`;
    }
};

function changeSlide(index){
    clearInterval(autoSlideInterval)
    box_game[currentSlide].classList.remove('active_game');
    box_game[index].classList.add('active_game');
    text[currentSlide].classList.remove('active_text');
    text[index].classList.add('active_text');
    currentSlide = index;
    slide(); 
    if (currentSlide === box_game.length - 1 && Slide_index > 0) {
      setTimeout(function() {
        const box1 = document.querySelector('.box_game1');
        const box2 = document.querySelector('.box_game2');
        box1.style.left = `${(Slide_index + 1) * 100}%`
        box2.style.left = `${(Slide_index) * 100}%`
      }, 300);
    } 

    if (currentSlide === 0 && Slide_index > 0) {
      setTimeout(function() {
        const box1 = document.querySelector('.box_game1');
        const box2 = document.querySelector('.box_game2')
        box1.style.left = `${(Slide_index) * 100}%`
        box2.style.left = `${(Slide_index + 1) * 100}%`
      }, 300);
    } 

    if (currentSlide === box_game.length - 1 && Slide_index <= 0) {
        setTimeout(function() {
          const box1 = document.querySelector('.box_game1');
          const box2 = document.querySelector('.box_game2');
          box1.style.left = `${(Slide_index + 1) * 100}%`
          box2.style.left = `${(Slide_index) * 100}%`
        }, 300);
    }

    if (currentSlide === 0 && Slide_index <= 0){
      setTimeout(function() {
        const box1 = document.querySelector('.box_game1');
        const box2 = document.querySelector('.box_game2');
        box1.style.left = `${(Slide_index) * 100}%`
        box2.style.left = `${(Slide_index + 1) * 100}%`
      }, 300);
    }
};



