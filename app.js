$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Web Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    var typed = new Typed(".typing-2", {
      strings: [" Web Developer"],
      typeSpeed: 100,
      backSpeed: 160,
      loop: true,
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


const  name = document.getElementById('name')
const email = document.getElementById('email')
    const message = document.getElementById('mes')
    const phone = document.getElementById('phone')
function sendEmail(){
  Email.send({
    SecureToken: "ad289fcc-06f7-47e4-8b85-7e4bf8641265",
    To: "hossen.webdeveloper@gmail.com",
    From: "mdmitho199911@gmail.com",
    Subject: "New Contact Form Enquiry" +name,
    Body:
      "Name : " +
      document.getElementById("name").value +
      "<br> Email : " +
      document.getElementById("email").value +
      "<br> Phone : " +
      document.getElementById("phone").value +
      "<br> Message : " +
      document.getElementById("mes").value,
  }).then((message) => alert("message send  Succesfully"));
}