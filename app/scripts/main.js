$(function() {
  $.getJSON('data/photos.json', function(json, textStatus) {
    $.each(json.photos, function(index, photo) {
      console.log(photo);
      var $photo = $(`
       <div class="photo">
        <a href="#" class="photo__link">
          <span class="highlight"></span>
          <img class="photo__image" alt="` + photo.name + `"/>
          <h2 class='photo__title'>` + photo.name + `</h2>
        </a>
      </div>`);
      $photo.find('img').attr('src', photo.url);
      $('.collage').append($photo);

    });
    initAnimation();
  });
  function initAnimation() {
    var $photo = $('.photo');

    $photo.on('mousemove', function(e) {
      var $this = $(this),
        eX = e.offsetX,
        eY = e.offsetY,
        dim = this.getBoundingClientRect(),
        w = dim.width / 2,
        h = dim.height / 2,
        tiltLimit = 15,
        posX = (h - eY) * (tiltLimit / h),
        posY = (w - eX) * (tiltLimit / w) * -1;

      $this.find('a').css({
        'transform': 'rotateX( ' + posX + 'deg ) rotateY( ' + posY + 'deg )',
        'box-shadow': (posY * -1) + 'px ' + (posX + 14) + 'px 34px 0 rgba( 0, 0, 0, 0.1 )'
      });

      $this.find('.highlight').css({
        'opacity': 1,
        'transform': 'translate3d( ' + (posX * -4) + 'px, ' + (posY * -4) + 'px, ' + '0 )'
      });
    });

    $photo.mouseleave(function(e) {
      var $el = $(this).find('a');

      $el.removeAttr('style').addClass('hover--ending');

      setTimeout(function() {
        $el.removeClass('hover--ending');
      }, 500);

      $el.find('.highlight').removeAttr('style');
    });
  }


});