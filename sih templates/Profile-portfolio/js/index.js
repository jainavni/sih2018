$(document).ready(function(){
	
// 	Navigation scroll

// 	=======================================================================  */

// 	// Scroll to point on page

// 	// Options

	var scroll_speed = 500; // Scroll speed. Set to 0 for instant snap
	var nav_links = $('ul li'); // Nav link elements

	function scroll_to(element){
		$('html, body').animate({
	    	scrollTop: $(element).offset().top -50 // Scroll to element
	  	}, scroll_speed);
	}

	nav_links.click(function() {
		var id = $(this).html().toLowerCase(); // Get clicked link
		var target = $('[scroll_target = ' + id + ']'); // Set the target element
		scroll_to(target); // Scroll to target
	});

// 	/* ====================================================================
	
// 	Responsive menu

// 	=======================================================================  */

// 	// Options

	var r_nav_open = 0; // Init menu closed

	$('.pen_responsive_nav').click(function(){
	  if(r_nav_open == 0){
	  	$(this).find('ul').show(); // Show the menu
	    r_nav_open = 1; // Set to open
	  } else{
	    $(this).find('ul').hide(); // Hide the menu
	    r_nav_open = 0; // Set to closed
	  }
	});
});