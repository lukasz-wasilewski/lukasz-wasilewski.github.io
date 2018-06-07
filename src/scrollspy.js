import 'bootstrap';
const $ = window.$;
$(document).ready(function(){
	
	// Scrollspy initiation
	$('body').scrollspy({ 
		target: '#scroll-spy',
		offset: 70
	});

	// On render, adjust body padding to ensure last Scroll target can reach top of screen
	var height = $('#howto').innerHeight();
	var windowHeight = $(window).height();
	var navHeight = $('nav.navbar').innerHeight();
	var siblingHeight = $('#howto').nextAll().innerHeight();


	if(height < windowHeight){
		$('body').css("padding-bottom", windowHeight-navHeight-height-siblingHeight + "px");
	}

	// On window resize, adjust body padding to ensure last Scroll target can reach top of screen
	$(window).resize(function(event){
		var height = $('#howto').innerHeight();
		var windowHeight = $(window).height();
		var navHeight = $('nav.navbar').innerHeight();
		var siblingHeight = $('#howto').nextAll().innerHeight();
		
		
		if(height < windowHeight){
			$('body').css("padding-bottom", windowHeight-navHeight-height-siblingHeight + "px");
		}
	});
	
	$('.scrollTop').click(function(event){
		// Make sure this.hash has a value before overriding default behavior
			// Prevent default anchor click behavior
			event.preventDefault();		
			
			$('html, body').animate({
				scrollTop: 0
			}, 600, function(){	
			});		
	});
	$(window).scroll(function(){
		var scrollPos = $(this).scrollTop();
		if(scrollPos > 0){
			$('.navbar').addClass('show-color');
			$('.scrollTop').addClass('show-button');
		} else{
			$('.navbar').removeClass('show-color');
			$('.scrollTop').removeClass('show-button');
		}
		
	});
});