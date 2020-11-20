window.addEventListener( 'load', function( event ) {
	if (!window.reinit) {
		window.reinit = {};
	}

	if (!window.reinit.slider) {
		window.reinit.slider = {};
	}

	window.reinit.slider.contacts = function() {
		$('.js-swiper-contacts').each(function(i,el){

			window.slam_slider({
				el: el,
				args: {
					autoHeight: false,
					lazy: true,
					loop: true,
					slidesPerView: 3,
					spaceBetween: 30,
					pagination: false,
					watchOverflow: true,
					breakpoints: {
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						768: {
							simulateTouch: true,
							slidesPerView: 2,
							spaceBetween: 30,
						},
						575: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						250: {
							simulateTouch: false,
							slidesPerView: 1,
							spaceBetween: 20,
						}
					}
				}
			})
		});
	};

	window.reinit.slider.contacts();
});
