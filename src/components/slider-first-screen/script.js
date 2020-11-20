window.addEventListener( 'load', function( event ) {
	if (!window.reinit) {
		window.reinit = {};
	}

	if (!window.reinit.slider) {
		window.reinit.slider = {};
	}
	window.reinit.slider.fsslider = function() {
		let fsSlider = $('.js-fs-slider')
		if (fsSlider.length && !fsSlider.hasClass('inited')) {
			fsSlider.each(function(i,el) {
				let slider = el;
				let length = slider.querySelectorAll('.swiper-slide').length;
				let swiper = window.slam_slider({
					el: el,
					args: {
						autoHeight: false,
						lazy: {
							enabled: true,
							loadPrevNext: true,
							loadPrevNextAmount: 1,
							loadOnTransitionStart: true,
						},
						slidesPerView: 'auto',
						centeredSlides: true,
						spaceBetween: 0,
						watchOverflow: true,
						simulateTouch: true,
						// autoplay: {
						// 	delay: 5000,
						// },
						breakpoints: {
							768: {
								loop: length > 1,
							},
							250: {
								slidesPerView: 1,
								spaceBetween: 0,
								loop: length > 1,
							},
						}
					}
				}).on('init', () => {
					swiper.autoplay.delay = 5000;
					setTimeout(function(){
						swiper.autoplay.start()
					}, 2000);
				})
			});
			fsSlider.addClass('inited')
		}
	};
	window.oneevent({
		name: 'fsslider',
		event: {
			scroll: true,
			click: true,
			mousedown: true,
			timeout: {
				delay: 6000
			},
			mouseover: {
				trigger: 'body'
			},
			touchstart: true
		},
		callback: window.reinit.slider.fsslider
	});
	// window.reinit.slider.fs_slider()
});
