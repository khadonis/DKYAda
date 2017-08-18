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