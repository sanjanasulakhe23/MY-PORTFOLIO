// Custom JavaScript for Certificates Section

document.addEventListener("DOMContentLoaded", function () {
  console.log("Certificates Section Loaded ✅");

  // Grab the carousel element
  const certificateCarousel = document.querySelector("#certificatesCarousel");

  // Initialize Bootstrap Carousel with custom options
  const carousel = new bootstrap.Carousel(certificateCarousel, {
    interval: 4000,   // 4 seconds per slide
    pause: "hover",   // pauses when mouse is over
    ride: "carousel"  // auto start
  });

  // Optional: Event listener when slide changes
  certificateCarousel.addEventListener("slid.bs.carousel", function (event) {
    console.log("Now showing certificate slide:", event.to);


  var myCarousel = document.querySelector('#certificateCarousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // 3 seconds per slide
  ride: 'carousel'
});

  });
});
