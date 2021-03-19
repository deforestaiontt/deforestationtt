

// Preloader
$(window).on('load',function(){
    setTimeout(function(){
    $(".preloader").fadeOut('slow');
    },600);
});

//Navbar Transparent
if (window.location.pathname == '/index.html') {
    if ($(window).scrollTop() == 0) {
        $(window).on('load', function(){
            $('.header').css('background','transparent');
            $('.header').css('opacity','0');
        });
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.header').css('background','#3E9E57');
            $('.header').css('opacity','1');
        } else {
            $('.header').css('background','transparent');
            $('.header').css('opacity','0');
        }
    });
}






 
  $(document).ready(function(){

    if ($(document).scrollTop() > 100) {
        $('.navbar').addClass('affix animated fadeInDown');
    } else {
        $('.navbar').removeClass('affix animated fadeInDown');
    }

  	// Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar-nav", offset:67});

    // Add smooth scrolling on all links inside the navbar
   $(".navbar-nav a").on('click', function(event) {

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

     // hide navbar on mobile 
    $(".navbar-collapse").collapse("hide");

    } // End if

});

     //Product Carousel
     $('#product-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
   })

     //Testimonial Carousel
     $('#testimonial-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
   })
});