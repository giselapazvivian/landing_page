//get all the images and li from HTML
var carouselImages = document.getElementsByClassName("img");
var currentIndex = 0;

//function1
function displayImage() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].style.display = "none";
  }
  carouselImages[currentIndex].style.display = "block";
}


//function2
function moveLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }
  
  displayImage();
 
}

//function3
function moveRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  
  displayImage();
 
}

//function4
function dotClick(c) {
  currentIndex = c;
  displayImage();
  
}

//initial stage
displayImage();
