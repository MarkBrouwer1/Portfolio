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

$('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

 $('#modal1').modal('open');

  $('#modal1').modal('close');



})(jQuery); // end of jQuery name space