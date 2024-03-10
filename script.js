let flag = 0;

// To Display Image Slider
const slideShow = (num) => {
  let slides = document.querySelectorAll(".slide");
  console.log(slides);

  // for of Loop Bcz Kisi chz ko dikhany sy Jo pehly sy mojuud hai wo hide kr do


  if (num == slides.length) {
    flag = 0
    num = 0 
  }else if(num < 0){
    flag = 1
    num = 1
  }

  for (const y of slides) {
    y.style.display = "none";
  }

  slides[num].style.display = "block";
};
slideShow(flag);
// To Display Image Slider

// To Control Prev And Next Button

function controller(x) {
  flag = flag + x;
  slideShow(flag);
}

// To Control Prev And Next Button
