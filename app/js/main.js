/*! Custom JS */
//detect msie
if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
  $('html').addClass('ie');
}
//masonry
$(document).ready(function () {
  $('.grid').masonry({
    itemSelector: '.grid-item'
  });
});
//bootstrap modal popup convert to lightbox
$('a.thumb').click(function (event) {
  event.preventDefault();
  var src = $(this).attr('href');
  var content = $('.modal-body');
  content.empty();
  content.html('<img src="' + src + '">');
  $('.modal-profile').modal('{show:true}');
});
$('#myModal').modal('handleUpdate');
$('#myModal').on('show.bs.modal', function () {
  $(this).find('.modal-body').css({
    width: 'auto', //probably not needed
    height: 'auto', //probably not needed 
    'max-height': '100%'
  });
});
//linklere tıklanınca sayfanın ilgili bölümlerine gönderme fonksiyonu.
function sendToTop(aLink) {
  $(aLink).each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      var $this = $(this);
      var divId = $this.attr('href');
      console.log(divId);
      $('html,body').animate({
        scrollTop: $('#' + divId).offset().top
      }, 1500);
    });
  });
};
sendToTop('.main-menu-item a');
sendToTop('.btn-bilgi');


$('.hamb-menu').click(function () {
  $('.main-menu').toggleClass('open');
  $(this).toggleClass('closed');
  return false;
});
$(document).click(function () {
  $('.main-menu').removeClass('open');
  $('.hamb-menu').removeClass('closed');
});

function clickStop(div) {
  div.click(function (evt) {
    evt.stopPropagation();
  });
};
clickStop($('.main-menu'));

//filmi oynat
$('.film-has-video').click(function () {
  $(this).css('background-image', 'none');
  $(this).after().hide();
  /* var $iframe = $(this).siblings('.video-frame');
  var src = $iframe.attr('src');
  $iframe.attr('src', src + '&autoplay=1'); */
  playVideo();
});