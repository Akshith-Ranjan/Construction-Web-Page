$(document).ready(function () {
  var $item = $('.carousel .item');
  var $wHeight = $(window).height() - 60;
  $item.eq(0).addClass('active');
  $item.height($wHeight);
  $item.addClass('full-screen');

  $('.carousel img').each(function () {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image': 'url(' + $src + ')',
      'background-color': $color
    });
    $(this).remove();
  });

  $(window).on('resize', function () {
    $wHeight = $(window).height();
    $item.height($wHeight);
  });

  $('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });
  $(function () {
    $(window).scroll(function () {
      var wscroll = $(window).scrollTop();
      if (wscroll > 90) {
        $('#nav1').addClass('navbar-fixed-top');
      }
      else {
        $('#nav1').removeClass('navbar-fixed-top');
      }
    });

  });

  $("#mycarousel").hover(
    function () {

      $("#myCarousel").carousel("pause");
    },
    function () {
      $("#myCarousel").carousel("cycle");
    }
  );
});
