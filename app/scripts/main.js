window.photos = [
  '/images/DSCF5520.jpg',
'/images/DSCF5529-Edit.jpg',
'/images/DSCF5557-Edit.jpg',
'/images/DSCF5577.jpg',
'/images/DSCF5586.jpg',
'/images/DSCF5594.jpg',
'/images/DSCF5639.jpg',
'/images/DSCF5641.jpg',
'/images/DSCF5650.jpg',
'/images/DSCF5667.jpg',
'/images/DSCF5674.jpg',
'/images/DSCF5688.jpg',
'/images/DSCF5701.jpg',
'/images/DSCF5718.jpg',
'/images/DSCF5734-Edit.jpg',
'/images/DSCF5743.jpg',
'/images/DSCF5749.jpg',
'/images/DSCF5779.jpg',
'/images/DSCF5795.jpg',
'/images/DSCF5813.jpg',
'/images/DSCF5827-Edit.jpg',
'/images/DSCF5841.jpg',
'/images/DSCF5867.jpg',
'/images/DSCF5878.jpg',
'/images/DSCF5882.jpg',
'/images/DSCF5903.jpg',
'/images/DSCF5912.jpg',
'/images/DSCF5932-Edit.jpg',
'/images/DSCF5972.jpg',
'/images/DSCF5999.jpg',
'/images/DSCF6015.jpg',
'/images/DSCF6027.jpg',
'/images/DSCF6032.jpg',
'/images/DSCF6039.jpg',
'/images/DSCF6052.jpg',
'/images/DSCF6073.jpg',
'/images/DSCF6107.jpg',
'/images/DSCF6123.jpg',
'/images/DSCF6178.jpg',
'/images/DSCF6224.jpg',
'/images/DSCF6259.jpg',
'/images/DSCF6320.jpg',
'/images/DSCF6375.jpg',
'/images/DSCF6379.jpg',
'/images/DSCF6399.jpg',
'/images/DSCF6444-Edit.jpg',
'/images/DSCF6466.jpg',
'/images/DSCF6480.jpg',
'/images/DSCF6493.jpg',
'/images/DSCF6509.jpg',
'/images/DSCF6512.jpg',
'/images/DSCF6529.jpg',
'/images/DSCF6553.jpg',
'/images/DSCF6610.jpg',
'/images/DSCF6663.jpg',
'/images/DSCF7016.jpg',
'/images/DSCF7024.jpg',
'/images/DSCF7047.jpg'
];

$(function() {
  $.each(window.photos, function(index, url) {
    console.log(poster);
    var poster = $(`
                   <article class="card">
                        <a href="#" class="card__link">
                            <span class="highlight"></span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25381/images_(2).jpeg" class="card__image"/>
                        </a>
                        <h2 class='card__title'>Furious 7</h2>
                    </article>`);
    poster.find('img').attr('src', url);
    $('.collage').append(poster);

  });

  var $card = $( '.card' );

  $card.on( 'mousemove', function( e ) {
    var $this       = $( this ),
        eX          = e.offsetX,
        eY          = e.offsetY,
        dim         = this.getBoundingClientRect(),
        w           = dim.width/2,
        h           = dim.height/2,
        tiltLimit   = 15,
        posX        = ( h - eY ) * ( tiltLimit / h ),
        posY        = ( w - eX ) * ( tiltLimit / w ) * -1;

    $this.find( 'a' ).css({
        'transform': 'rotateX( ' + posX + 'deg ) rotateY( ' + posY + 'deg )',
        'box-shadow': ( posY * -1 ) + 'px ' + ( posX + 14 ) + 'px 34px 0 rgba( 0, 0, 0, 0.1 )'
    });

    $this.find( '.highlight' ).css({
        'opacity': 1,
        'transform': 'translate3d( ' + ( posX * -4 ) + 'px, ' + ( posY * -4 ) + 'px, '  + '0 )'
    });
  });

  $card.mouseleave( function( e ) {
    var $el = $( this ).find( 'a' );

    $el.removeAttr( 'style' ).addClass( 'hover--ending' );

    setTimeout( function() {
        $el.removeClass( 'hover--ending' );
    }, 500 );

    $el.find( '.highlight' ).removeAttr( 'style' );
  });
});

