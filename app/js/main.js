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