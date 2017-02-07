var NAV_LIST = $('#nav-list');
var NAV_LINK_ARRAY = $('.nav-link');
var NAV_ACTIVE_CLASS = 'nav-active';

NAV_LINK_ARRAY.click(navScroll);

function navScroll() {
  NAV_LINK_ARRAY.removeClass(NAV_ACTIVE_CLASS); 
  $(this).addClass(NAV_ACTIVE_CLASS);
  var id = $(this).attr('href');
  var top = $(id).offset().top;
  $('body, html').animate({scrollTop:top}, 'slow');
}
