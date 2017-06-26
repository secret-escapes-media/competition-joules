(function ($, root, undefined) {$(function () {'use strict'; // on ready start
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
//        general
///////////////////////////////////////

  // css tricks snippet - http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

  // inserts current year
  $('.js-year').html(new Date().getFullYear());

  // detects touch device
  if ("ontouchstart" in document.documentElement){
    $('html').addClass('touch');
  }


///////////////////////////////////////
//      SVG image swap
///////////////////////////////////////

  // finds image with class and swaps .png with .svg in img source string
  if (Modernizr.svgasimg) {
    var svgSwap = $('img.js-svg-swap');
    svgSwap.each( function() {
      var currentSrc = $(this).attr('src'),
          newSrc = currentSrc.replace('.png', '.svg');
      $(this).attr('src', newSrc);
    });
  }


///////////////////////////////////////
//      Enter bar
///////////////////////////////////////

  function enterbar(){
    var st = $(document).scrollTop();
    var page = $('.page').offset().top;

    if( st > page ){
      $('.enter-bar').addClass('active');
    }else{
      $('.enter-bar').removeClass('active');
    }
  }
  $(document).ready(function(){ enterbar(); });
  $(document).scroll(function(){ enterbar(); });



///////////////////////////////////////
//       Background overlay fade
///////////////////////////////////////

function overlay_bg(){
	var st = $(document).scrollTop();
	var wh = $(window).height();

  $('.js-bg-fade').each(function(){

    var distance = $('.intro').height(); // 0
    var progress = -(st/distance)+1; // scrolltop - wh

    $(this).find('.js-bg-fade__overlay').css({
      "opacity": progress
    });

  });

}

$(document).scroll(function() {
	overlay_bg();
});

$(document).scroll(function() {
	var st = $(document).scrollTop();
	var wh = $(window).height();

	$('.title-banner__overlay').css({
    "opacity": st / (wh*1.5) + 0.15
	});
});


///////////////////////////////////////////////////////////////////////////////
});})(jQuery, this); // on ready end