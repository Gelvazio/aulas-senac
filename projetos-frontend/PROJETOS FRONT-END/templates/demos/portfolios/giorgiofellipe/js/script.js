$(function(){	
	'use strict';

	$('.nav a').on('click', function(){
	    $(".navbar-toggle").click();
	});

	$('#nav').localScroll(1000);
			
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	
	// $('#home').parallax("50%", 1.5);
	if ($(window).width() > 760) {
		$('#social-network').parallax("100%", 0.5);
	}

	
	// Scroll
	$('.scrollto').click(function(e){
		e.preventDefault();
		var scrollElm = $(this).attr('href');
		var scrollTo = $(scrollElm).offset().top;
		$('html, body').animate({ scrollTop: scrollTo - 50 }, "slow");
	});

	// Slides
	$('#slides').superslides({
		animation: 'fade',
		play: 5000
	});
	
	var owl = $("#slider-skills");
	owl.owlCarousel({
		autoPlay:true,
		items:5,
		itemsDesktop:[1000,4],
		itemsDesktopSmall:[900,3],
		itemsTablet:[600,2],
		itemsMobile:[480,1]
	});

	// Animations
	var windowH = $(window).height();

	$(window).bind('resize', function () {
		windowH = $(window).height();
	});
	
	var socialTopOffset = $('.social-network').offset().top;
	var skillsTopOffset = $('.skills').offset().top;
	var timelineTopOffset = $('.experience-line').offset().top;
	$(window).scroll(function(){
		// Fixed Navbar
		if (window.pageYOffset > windowH+3) {
			$('.navbar-flat').addClass('navbar-fixed-top');
			$('#about').addClass('fixed');
		} else {
			$('.navbar-flat').removeClass('navbar-fixed-top');
			$('#about').removeClass('fixed');
		}

		if(window.pageYOffset > skillsTopOffset-windowH+200) {
			$('.pie-graph').easyPieChart({
				easing: 'easeInOut',
				barColor: '#F16272',
				trackColor: '#F7F6F6',
				scaleColor: false,
				lineWidth: 4,
				size: 150,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}

		if(window.pageYOffset > timelineTopOffset-windowH+200) {
			$('.experience-line li').addClass('fadeInUp');
		}

		if(window.pageYOffset > socialTopOffset-windowH+200) {
			$('.social-network li').addClass('fadeInUp');
		}
	});
	
    var $window = $(window);
	var scrollTime = 0;
	var scrollDistance = 50;

	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	is_safari = !(is_chrome && is_safari);

//  Unfortunately this won't work properly on safari with trackpad, it keeps the screen flickering
	if (!is_safari) {
		$window.on("mousewheel DOMMouseScroll", function(event){

			event.preventDefault();	

			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);

			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
					ease: Power1.easeOut,
					autoKill: true,
					overwrite: 5							
				});

		});
	}
});