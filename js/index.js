$(function() {

  var flame = $('#flame');
  var txt = $('h1');

  flame.on({
    click: function() {
      flame.removeClass('burn').addClass('puff');
      $('.smoke').each(function() {
        $(this).addClass('puff-bubble');
      });
      $('#glow').remove();
      txt.hide().html("Semoga Panjang Umur, Sehat selalu <b>dan</b> semua keinginan tercapai ya sayang, I Love u My Yell ^_^..").delay(750).fadeIn(300);
      $('#candle').animate({
        'opacity': '.5'
      }, 100);
    }
  })
});