(function(document, window){
  function analizeScroll(){
    if(location.pathname.length>1) return $('body').addClass('shortHead');
    if($(window).scrollTop()<10)
      $('body').removeClass('shortHead');
    else
      $('body').addClass('shortHead');
  }
  $(document).ready(function(){
    $(window).on('scroll', analizeScroll);
    analizeScroll();
  });
  
})(document, window);