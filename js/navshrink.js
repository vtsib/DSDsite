
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


jQuery(document).ready(function() {
 
	var offset = 250;
 
	var duration = 300;
 
/*	jQuery(window).scroll(function() {
	 
		if (jQuery(this).scrollTop() > offset) {
	 
			jQuery('.back-to-top').fadeIn(duration);
	 
		} else {
	 
			jQuery('.back-to-top').fadeOut(duration);
	 
		}
 
	});
 
 */
 
	jQuery('.back-to-top').click(function(event) {
	 
		event.preventDefault();
	 
		jQuery('html, body').animate({scrollTop: 0}, duration);
	 
		return false;
	 
	})
 
});