window.addEventListener( 'load', function( event ) {
	if (!window.reinit) {
		window.reinit = {};
	}
	if (!window.reinit.slider) {
		window.reinit.slider = {};
	}
	window.reinit.slider.news = function() {
		$('.js-swiper-news').each(function(i,el){
			let slider = el;
			let length = slider.querySelectorAll('.swiper-slide').length;
			window.slam_slider({
				el: el,
				args: {
					autoHeight: false,
					lazy: true,
					loop: length > 4,
					slidesPerView: 4,
					spaceBetween: 30,
					pagination: false,
					watchOverflow: true,
					breakpoints: {
						1200: {
							loop: length > 4,
							slidesPerView: 4,
							spaceBetween: 30,
						},
						1024: {
							loop: length > 2,
							slidesPerView: 2,
							spaceBetween: 30,
						},
						768: {
							loop: length > 2,
							simulateTouch: true,
							slidesPerView: 2,
							spaceBetween: 30,
						},
						575: {
							loop: length > 1,
							slidesPerView: 1,
							spaceBetween: 20,
						},
						250: {
							loop: length > 1,
							simulateTouch: false,
							slidesPerView: 1,
							spaceBetween: 20,
						}
					}
				}
			})
		});
	};
	window.reinit.slider.news();


	window.reinit.slider.news2 = function() {
		$('.js-swiper-news-02').each(function(i,el){
			let slider = el;
			let length = slider.querySelectorAll('.swiper-slide').length;
			window.slam_slider({
				el: el,
				autoHeight: false,
					args: {
					lazy: true,
					loop: length > 3,
					slidesPerView: 3,
					spaceBetween: 30,
					pagination: false,
					watchOverflow: true,
					breakpoints: {
						1200: {
							loop: length > 3,
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							loop: length > 2,
							slidesPerView: 2,
							spaceBetween: 30,
						},
						768: {
							loop: length > 2,
							simulateTouch: true,
							slidesPerView: 2,
							spaceBetween: 30,
						},
						575: {
							loop: length > 1,
							slidesPerView: 1,
							spaceBetween: 20,
						},
						250: {
							loop: length > 1,
							slidesPerView: 1,
							spaceBetween: 20,
							simulateTouch: false,
						}
					}
				}
			})
		});
	};

	window.reinit.slider.news2();
});
