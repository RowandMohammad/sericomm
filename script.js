/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("nav a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  $(document).ready(function() {
    let currentTestimonial = 1;
    const totalTestimonials = 4;
    setInterval(() => {
        $(`#testimonial${currentTestimonial}`).fadeOut(1000, function() {
            currentTestimonial = currentTestimonial % totalTestimonials + 1;
            $(`#testimonial${currentTestimonial}`).fadeIn(1000);
        });
    }, 5000); // Change testimonial every 5 seconds
});
