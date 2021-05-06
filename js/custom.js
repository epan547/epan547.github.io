// Show more text when clicking on "Read more" in Career section

const buttons = document.getElementsByClassName('readMore');

const onButtonClick = (event) => {
  const button = event.target;
  const dataTarget = button.getAttribute('data-target');
  const extraContent = document.getElementById(dataTarget);
  button.innerHTML = button.innerHTML === 'Read less' ? 'Read more' : 'Read less';
  extraContent.classList.toggle('show');
}

const attachingEvent = e => e.addEventListener('click', onButtonClick);

Array.prototype.forEach.call(buttons, attachingEvent);


 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $(".navbar-collapse").collapse('hide');
    


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });
