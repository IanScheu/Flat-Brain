
$(document).ready(function(){

    // HEAD
      $('.nextA-one').click(function(){
          $('.nextA-one').hide();
          $('.nextA-two').show();
          $('.nextA-three').hide();

          $('.prevA-one').hide();
          $('.prevA-two').show();
          $('.prevA-three').hide();

          $('.head-container').removeClass('head-one');
          $('.head-container').addClass('head-two');
      });

      $('.nextA-two').click(function(){
          $('.nextA-one').hide();
          $('.nextA-two').hide();
          $('.nextA-three').show();

          $('.prevA-one').hide();
          $('.prevA-two').hide();
          $('.prevA-three').show();

          $('.head-container').removeClass('head-two');
          $('.head-container').addClass('head-three');
      });

      $('.nextA-three').click(function(){
          $('.nextA-one').show();
          $('.nextA-two').hide();
          $('.nextA-three').hide();
          
          $('.prevA-one').show();
          $('.prevA-two').hide();
          $('.prevA-three').hide();

          $('.head-container').removeClass('head-three');
          $('.head-container').addClass('head-one');
      });

      $('.prevA-one').click(function(){
          $('.prevA-one').hide();
          $('.prevA-two').hide();
          $('.prevA-three').show();

          $('.nextA-one').hide();
          $('.nextA-two').hide();
          $('.nextA-three').show();

          $('.head-container').removeClass('head-one');
          $('.head-container').addClass('head-three');
      });

      $('.prevA-three').click(function(){
          $('.prevA-one').hide();
          $('.prevA-two').show();
          $('.prevA-three').hide();

          $('.nextA-one').hide();
          $('.nextA-two').show();
          $('.nextA-three').hide();

          $('.head-container').removeClass('head-three');
          $('.head-container').addClass('head-two');
      });

      $('.prevA-two').click(function(){
          $('.prevA-one').show();
          $('.prevA-two').hide();
          $('.prevA-three').hide();

          $('.nextA-one').show();
          $('.nextA-two').hide();
          $('.nextA-three').hide();          

          $('.head-container').removeClass('head-two');
          $('.head-container').addClass('head-one');
      });

    // BODY
      $('.nextB-one').click(function(){
          $('.nextB-one').hide();
          $('.nextB-two').show();
          $('.nextB-three').hide();

          $('.prevB-one').hide();
          $('.prevB-two').show();
          $('.prevB-three').hide();

          $('.body-container').removeClass('body-one');
          $('.body-container').addClass('body-two');
      });

      $('.nextB-two').click(function(){
          $('.nextB-one').hide();
          $('.nextB-two').hide();
          $('.nextB-three').show();

          $('.prevB-one').hide();
          $('.prevB-two').hide();
          $('.prevB-three').show();

          $('.body-container').removeClass('body-two');
          $('.body-container').addClass('body-three');
      });

      $('.nextB-three').click(function(){
          $('.nextB-one').show();
          $('.nextB-two').hide();
          $('.nextB-three').hide();
          
          $('.prevB-one').show();
          $('.prevB-two').hide();
          $('.prevB-three').hide();

          $('.body-container').removeClass('body-three');
          $('.body-container').addClass('body-one');
      });

      $('.prevB-one').click(function(){
          $('.prevB-one').hide();
          $('.prevB-two').hide();
          $('.prevB-three').show();

          $('.nextB-one').hide();
          $('.nextB-two').hide();
          $('.nextB-three').show();

          $('.body-container').removeClass('body-one');
          $('.body-container').addClass('body-three');
      });

      $('.prevB-three').click(function(){
          $('.prevB-one').hide();
          $('.prevB-two').show();
          $('.prevB-three').hide();

          $('.nextB-one').hide();
          $('.nextB-two').show();
          $('.nextB-three').hide();

          $('.body-container').removeClass('body-three');
          $('.body-container').addClass('body-two');
      });

      $('.prevB-two').click(function(){
          $('.prevB-one').show();
          $('.prevB-two').hide();
          $('.prevB-three').hide();

          $('.nextB-one').show();
          $('.nextB-two').hide();
          $('.nextB-three').hide();          

          $('.body-container').removeClass('body-two');
          $('.body-container').addClass('body-one');
      });

    // PANTS
      $('.nextC-one').click(function(){
          $('.nextC-one').hide();
          $('.nextC-two').show();
          $('.nextC-three').hide();

          $('.prevC-one').hide();
          $('.prevC-two').show();
          $('.prevC-three').hide();

          $('.pants-container').removeClass('pants-one');
          $('.pants-container').addClass('pants-two');
      });

      $('.nextC-two').click(function(){
          $('.nextC-one').hide();
          $('.nextC-two').hide();
          $('.nextC-three').show();

          $('.prevC-one').hide();
          $('.prevC-two').hide();
          $('.prevC-three').show();

          $('.pants-container').removeClass('pants-two');
          $('.pants-container').addClass('pants-three');
      });

      $('.nextC-three').click(function(){
          $('.nextC-one').show();
          $('.nextC-two').hide();
          $('.nextC-three').hide();
          
          $('.prevC-one').show();
          $('.prevC-two').hide();
          $('.prevC-three').hide();

          $('.pants-container').removeClass('pants-three');
          $('.pants-container').addClass('pants-one');
      });

      $('.prevC-one').click(function(){
          $('.prevC-one').hide();
          $('.prevC-two').hide();
          $('.prevC-three').show();

          $('.nextC-one').hide();
          $('.nextC-two').hide();
          $('.nextC-three').show();

          $('.pants-container').removeClass('pants-one');
          $('.pants-container').addClass('pants-three');
      });

      $('.prevC-three').click(function(){
          $('.prevC-one').hide();
          $('.prevC-two').show();
          $('.prevC-three').hide();

          $('.nextC-one').hide();
          $('.nextC-two').show();
          $('.nextC-three').hide();

          $('.pants-container').removeClass('pants-three');
          $('.pants-container').addClass('pants-two');
      });

      $('.prevC-two').click(function(){
          $('.prevC-one').show();
          $('.prevC-two').hide();
          $('.prevC-three').hide();

          $('.nextC-one').show();
          $('.nextC-two').hide();
          $('.nextC-three').hide();          

          $('.pants-container').removeClass('pants-two');
          $('.pants-container').addClass('pants-one');
      });
});



$(function() {
  $('.arm-trigger').hover(function() {
    $('#arm-hover').css('opacity', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#arm-hover').css('opacity', '0');
  });

  $('.crotch-trigger').hover(function() {
    $('#crotch-hover').css('opacity', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#crotch-hover').css('opacity', '0');
  });

  $('.head-trigger').hover(function() {
    $('#head-hover').css('opacity', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#head-hover').css('opacity', '0');
  });

  $('.heart-trigger').hover(function() {
    $('#heart-hover').css('opacity', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#heart-hover').css('opacity', '0');
  });

  $('.head-right-trigger').hover(function() {
    $('#head-right-hover').css('opacity', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#head-right-hover').css('opacity', '0');
  });
});





/*
$(function () {

  $('a[href^="#"]').click(function( ) {
      
      $('html, body').animate({
          'scrollLeft': $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().left;
          'scrollTop': $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top;
      }, 500);

      return false;
  });
});
*/