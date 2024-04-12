document.addEventListener("DOMContentLoaded", function() {
   // Get necessary elements
   var sliderWrapper = document.querySelector('.slider-wrapper');
   var slides = document.querySelectorAll('.slide');
   var prevButton = document.querySelector('.prev');
   var nextButton = document.querySelector('.next');

   // Initialize index variable
   var currentIndex = 0;

   // Function to show slide
   function showSlide(index) {
       // Update currentIndex
       currentIndex = index;
       // Calculate translateX value for slider wrapper
       var translateValue = -index * 100 + '%';
       // Apply transform style to slider wrapper
       sliderWrapper.style.transform = 'translateX(' + translateValue + ')';
   }

   // Event listener for previous button click
   prevButton.addEventListener('click', function() {
       // Decrease index
       currentIndex--;
       // Check for boundary conditions
       if (currentIndex < 0) {
           currentIndex = slides.length - 1;
       }
       // Show slide
       showSlide(currentIndex);
   });

   // Event listener for next button click
   nextButton.addEventListener('click', function() {
       // Increase index
       currentIndex++;
       // Check for boundary conditions
       if (currentIndex >= slides.length) {
           currentIndex = 0;
       }
       // Show slide
       showSlide(currentIndex);
   });
});
