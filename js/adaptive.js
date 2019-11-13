let b = $(window).width();
if (b < '715'){
$('header ul li').css({'display' : 'none'});
$('.listP').css({'display' : 'none'});
$('.ecoProblems').css({'display' : 'none'});
$('.mobileFixed').css({'display' : 'flex'});
$('.slider2').css({'max-width' : `${$(window).width()}px`});
  $('.slide2').css({'max-width' : `200px`});
}else if (b > '715'){
  $('.slider2').css({'max-width' : `${$(window).width() - $(window).width() * .3}px`});
$('header ul li').css({'display' : 'flex'});
$('.mobileFixed').css({'display' : 'none'});
};
$('.mobileFixed').click(function(){
  $('.listP').css({'display' : 'flex'});
  $('.mobileFixed').addClass('afterClick');
  $('.mobileFixed').removeClass('mobileFixed');
});
$('.afterClick').click(function(){
$('.listP').css({'display' : 'none'});
});
$('section').css({'max-width' : '${b}'})






if(b < '450'){
  $('.slide2').css({'width' : '${b - 40px}'})
}
