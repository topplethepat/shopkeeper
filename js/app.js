	$(document).ready(function(){

	$('.button').click (function(){
		$(this).css('color','red');
		$(location).attr('href',"http://www.cartserver.com/sc/cart.cgi");
		
	});
  });