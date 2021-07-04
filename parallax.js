function initParallax( ) {

  var pages = document.querySelectorAll( '.page' );

  pages.forEach( function( page ) {
    page.addEventListener( 'scroll', parallax );
  } );

  function parallax( event ) {
    var page = event.target;

    var scrolled = page.scrollTop; //pageYOffset;
    var parallax = page.querySelectorAll( ":scope .parallax" );

    parallax.forEach( function( item ) {
      var factor = item.dataset[ 'factor' ];
      var direction = item.dataset[ 'direction' ];
      if ( direction === undefined ) direction = 'y';

      if ( factor !== undefined ) {
        factor = parseFloat( factor );

        var coords = ( scrolled * factor ) + 'px'
        item.style.transform = 'translate' + direction.toUpperCase( ) + '(' + coords + ') translateZ(0)';
      }
    } );
  }
}
window.onload = initParallax;
