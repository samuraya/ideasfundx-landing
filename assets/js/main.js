(function ($) {
	"use strict";

    jQuery(document).ready(function($){
 
	
	
				//===== Sticky Menu-Bar Start
			$(window).on('scroll',function(event) {    
				var scroll = $(window).scrollTop();
					if (scroll < 100) {
						$(".header-area").removeClass("sticky");
					}else{
						$(".header-area").addClass("sticky");
					}
				});
			//===== Sticky Menu-Bar End


			//===== Scroll To Top Start
			$(window).on('scroll', function (event) {
				if ($(this).scrollTop() > 600) {
					$('.down-button').fadeIn(200)
				} else {
					$('.down-button').fadeOut(200)
				}
			});
				//Animate the scroll to yop
			$('.down-button').on('click', function (event) {
				event.preventDefault();

				$('html, body').animate({
					scrollTop: 0,
				}, 1500);
			});

				//===== Scroll To Top End

				$(".menu_trigger").click(function(){
					$(".slide-menu").addClass("active");
				});
				$(".cross").click(function(){
					$(".slide-menu").removeClass("active");
				});

				
			 

	});



    jQuery(window).load(function(){
	


    });


}(jQuery));	