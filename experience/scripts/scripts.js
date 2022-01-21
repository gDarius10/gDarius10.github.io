$(document).ready(function(){
    $('.sponsors_slick').slick({
        dots: false,
        arrows: false,
        autoplay:true,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
           
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false
              }
            },
            {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
            }
          }]
    });

    $('.card_slick').slick({
        dots: false,
        arrows: true,
        variableWidth: true,
        autoplay:false,
        infinite: true,
        nextArrow: document.getElementById('slick-hobby-1'),
        prevArrow: document.getElementById('slick-hobby-2'),
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{    
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false
              }
            },
            {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
            }
          }]
    });



    if ($(window).width() < 640) {
        $("#btn_hobby").css("margin-top","28px");
        $("#btn_hobby").appendTo(".card_slick");
     }



     $(window).scroll(function(){
      
      var showAfter = 100;
      if ($(this).scrollTop() > showAfter ) { 
       $('.back-to-top').fadeIn();
      } else { 
       $('.back-to-top').fadeOut();
      }
     });
     
     
     $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},0);
      return false;
     });
     
     //return btn
     $('body').prepend('<button class="btn btn-link-back" onclick="location.href=&quot; ../../index.html &quot;" type="button">Back to portfolio</button>');

    
  });