// Question 1.1
console.log(document.images);
console.log(document.querySelectorAll('img'));

// Question 1.2
console.log(document.querySelectorAll('select[name=City] option'))

// Question 1.3
console.log(document.querySelectorAll('table')[1].querySelectorAll('tr'))

// Question 1.4
console.log(document.getElementsByClassName('bGrey fontBlue'));

// Question 2
setInterval(function(){
  document.title = new Date().toLocaleString();
}, 1000);

// Questio 3
const startSliding = (imgObject) => {
  let count = 1;
  let id = setInterval(function(){
    if(count == 9) count = 1;
    imgObject.src = `images/${count++}.jpg`;
  }, 1000);
  return id;
}

const stopSlider = (id) => {
  clearInterval(id);
}

let idSlider = startSliding(document.images[0]);

