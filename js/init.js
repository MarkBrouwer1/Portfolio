(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	
	$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  }); // end of document ready
  
  $('.pushpin-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
  
  
   $(document).ready(function(){
    $('.target').pushpin({
      top: 0,
      bottom: Infinity,
      offset: 0
    });
  });

   $(document).ready(function(){
      $('.carousel').carousel();
    });

     $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  
    //Removes pushpin and pushpin classes
  /*$('.tabs-wrapper .row').pushpin('remove');*/
  
var banner = document.querySelector('.banner');
var bannerVideo = document.querySelector('.banner__video');

$('.sparrow').on("click", function (event) {
    $('.sparrow-img').toggleClass('sprotate');
    $('.sparrow-img').toggleClass('sprotate-reset');
});
$('.arrow').on("click", function (event) {
    $('.arrow-img').toggleClass('rotate');
    $('.arrow-img').toggleClass('rotate-reset');
});
$('.arrow2').on("click", function (event) {
    $('.arrow-img').toggleClass('rotate2');
    $('.arrow-img').toggleClass('rotate-reset2');
});
$('.arrow3').on("click", function (event) {
    $('.arrow-img').toggleClass('rotate3');
    $('.arrow-img').toggleClass('rotate-reset3');
});
$('.arrow4').on("click", function (event) {
    $('.arrow-img').toggleClass('rotate4');
    $('.arrow-img').toggleClass('rotate-reset4');
});


$('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

 $('#modal1').modal('open');

  $('#modal1').modal('close');



})(jQuery); // end of jQuery name space