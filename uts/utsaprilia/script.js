const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slider = document.querySelector('.slider');
let index = 0;  

function goToPrev() {
  if (index > 0) {
    index--;
  } else {
    index = slider.children.length - 1;  
  }
  updateSlider();
}

function goToNext() {
  if (index < slider.children.length - 1) {
    index++;
  } else {
    index = 0;  
  }
  updateSlider();
}

function updateSlider() {
  const offset = -index * 100;  
  slider.style.transform = `translateX(${offset}%)`; 
}

prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);

setInterval(goToNext, 3000);
