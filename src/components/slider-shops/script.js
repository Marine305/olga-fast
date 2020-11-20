window.addEventListener( 'load', function( event ) {
	if (!window.reinit) {
		window.reinit = {};
	}

	if (!window.reinit.slider) {
		window.reinit.slider = {};
	}

	window.reinit.slider.shops = function() {
		$('.js-swiper-shops').each(function(i,el){
			var slider = el;
			var length = slider.querySelectorAll('.swiper-slide').length;
			window.slam_slider({
				el: el,
				args: {
					autoHeight: false,
					lazy: true,
					loop: length > 3,
					slidesPerView: 3,
					spaceBetween: 80,
					pagination: false,
					watchOverflow: true,
					breakpoints: {
						1200: {
							loop: length > 3,
							slidesPerView: 3,
							spaceBetween: 80,
						},
						1024: {
							loop: length > 2,
							slidesPerView: 2,
							spaceBetween: 60,
						},
						768: {
							loop: length > 2,
							simulateTouch: true,
							slidesPerView: 2,
							spaceBetween: 30,
						},
						250: {
							loop: length > 1,
							simulateTouch: false,
							slidesPerView: 1,
							spaceBetween: 10,
						}
					}
				}
			})
		});
	};

	window.reinit.slider.shops();
});
