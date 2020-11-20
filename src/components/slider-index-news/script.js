window.addEventListener( 'load', function( event ) {

	function initNewsSlider() {
			$('.js-swiper-index-news').each(function(i,el){
				window.slam_slider({
					el: el,
					args: {
						autoHeight: false,
						lazy: true,
						loop: true,
						slidesPerView: 1,
						spaceBetween: 0,
						watchOverflow: true,
						breakpoints: {
							768: {
								simulateTouch: true,
								init: false,
							},
							250: {
								simulateTouch: false,
								init: true,
							},
						}
					}
				})
			});
			
	} 

	if ($(window).width() <= 767) {
		initNewsSlider();
	};

	$(window).resize(function() {
		if ($(window).width() <= 767) {
			initNewsSlider();
		};
	});
});
