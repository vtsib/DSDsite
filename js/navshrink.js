
$(window).scroll(function () {
    if ($(document).scrollTop() < 100) {
 		$('nav').removeClass('shrink');
 		$('.navbar .navbar-nav').removeClass('shrink');
 		$('.navbar-brand img').removeClass('tiny');
 		$('.navbar-brand img').attr('src', './images/logo_big_03.png');
 		//$('.navbar-brand img').attr('width', '300');
    } else {
	    
		$('nav').addClass('shrink');
		$('.navbar .navbar-nav').addClass('shrink');
		$('.navbar-brand img').attr('src', './images/logo_tiny_03.png');
		$('.navbar-brand img').addClass('tiny');
		//$('.navbar-brand img').attr('width', '60');

    }
}); 