jQuery(function() {
	burgerMenu();
	smoothScroll();
	mapInit();
	iframeplay()
	//socialInit();
});





function burgerMenu(){
	$('.burger-menu').click(function() {
  		$(this).toggleClass('active');
  		$('nav').toggleClass('open');
	});
}


function iframeplay(){
	$('.videoContainer svg').click(function(){
		$('.videoContainer iframe').attr('src', 'https://www.youtube.com/embed/OAtUMPWZ1pc?rel=0&enablejsapi&autoplay=1').addClass('show');

		$('.videoContainer svg, .bg-video').addClass('behind');
	})
}

//Smooth scroll
function smoothScroll(){
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
				scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
	})
}



function mapInit(){
	var regionID = "";
	var markerID = "";

	$('.region').mouseenter(function(){
		$(".selected a").css('display','flex');

		$('.region').removeClass('active');
		$(this).addClass('active');

		regionID = $(this).data('id');

		$('.marker').each(function(){
			markerID = $(this).data('id');
			
			if (regionID === markerID){
				$('.detail').removeClass('active');
				$('.marker').removeClass('active');
				$(this).addClass('active');
				
				var detailH4 = $('.detail').find('.' + regionID).find('h4').html();
				var detailP = $('.detail').find('.' + regionID).find('p').html();
				var detailURL = $('.detail').find('.' + regionID).data('url');
				$(".selected h4").html(detailH4);
				$(".selected p").html(detailP);
				/*
				$(".selected a").click(function(){
					go(detailURL);				
				})
				*/
			}
		})
	});

	$('.region').mouseleave(function(){

	});
}


/*
function socialInit(){
	 $("#share").jsSocials({
	    showLabel: false,
	    showCount: false,
	    shares: ["facebook","twitter","linkedin", "email"]
	});
}
*/