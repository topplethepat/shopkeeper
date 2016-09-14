	$(document).ready(function(){

	$('.target').submit(function(){
		$(this).css('color','red');
		
		
	});
	$('.jumbotron').on('click','button', function(){
		window.location.href="FMP.html";
	});

   $('.ipad').on('click', 'button', function(){
   	    window.location.href="SmDev.html";
   });
$('img').on('click', function () {
        var image = $(this).attr('src');
        //alert(image);
        $('#myModal').on('show.bs.modal', function () {
            $(".showimage").attr("src", image);
            });
    });	

  });
	