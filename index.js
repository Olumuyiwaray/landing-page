let slideIndex = 0;

function showSlides() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth < 768) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds   
  }
}
showSlides();


function handleScroll() {
  var animatedElement = document.getElementById('phone_container');
  var elementPosition = animatedElement.getBoundingClientRect().top;
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (elementPosition < window.innerHeight / 1.5 && screenWidth < 768) {
    animatedElement.classList.add('phone_container');
  }
}

window.addEventListener('scroll', handleScroll);

// Trigger the handleScroll function on page load (in case the element is already in view)
document.addEventListener('DOMContentLoaded', handleScroll);


// Trigger the handleScroll function on page load (in case the element is already in view)

window.addEventListener('scroll', handleS);