// const { on } = require('gulp');

window.addEventListener( 'load', function( event ) {
	const $header = $('.js-header');
	let maxScrollTop = 0;
	$(window).on('scroll', function () {
		if ( maxScrollTop < $(this).scrollTop()) {
			maxScrollTop = $(this).scrollTop();
			$header.removeClass('header-scroll-top');
		} else {
			maxScrollTop = $(this).scrollTop();
			$header.addClass('header-scroll-top');
		}
		if($(window).width() >= 1024){
			if ($(this).scrollTop() > 150 && !$('.nav-catalog').hasClass('active')) {
				$('.header-nav').slideUp(100);
			} else {
				$('.header-nav').show();
			}
			if ( $(window).scrollTop() > 0) {
				$('.header-top-wrap').slideUp(200);
				$header.addClass('header-fixed');
			} else {
				$('.header-top-wrap').slideDown(250);
				$header.removeClass('header-fixed');
			}
		} else{
			if ( $(window).scrollTop() > 0) {
				$header.addClass('header-fixed');
			} else {
				$header.removeClass('header-fixed');
			}
		}
		
	});
	
	
	// let trigBtn = $('.js-open-window')
	// trigBtn.on('mouseover', function(){
	// 	trigBtn.each(function(){
	// 		let _this = $(this)
	// 		let mainWindow = _this.find('.js-main-window')
	// 		if (!_this.hasClass('active')) {
	// 			_this.addClass('active')
	// 			mainWindow.addClass('active')
	// 		} else {
	// 			_this.removeClass('active')
	// 			mainWindow.removeClass('active')
	// 		}
	// 	})
	// })


	window.reinit.menuShowMoreTrigger = function() {
		let navList = $('.nav-lvl3-list')
		if (navList.length) {
			navList.each(function() {
				let _this = $(this);
				let navItemCount = _this.children('.nav-lvl3-item').length
				if (navItemCount > 2) {
					_this.append('<div class="nav-lvl3-trigger js-nav-lvl3-trigger"><span class="link-show">Показать ещё</span><span class="link-hide">Свернуть</span></div>')
				}
				
			})
		}
		$('.js-nav-lvl3-trigger').each(function() {
			let _this = $(this);
			_this.click(function() {
				_this.toggleClass('active')
				let list = _this.parent('.nav-lvl3-list')
				list.toggleClass('opened')
			})
		})
	};

	window.reinit.menuShowMoreTrigger()


	// window.swipe({
	// 	selector: '.mob-menu',
	// 	// Сдвиг при котором произойдет this.touchend
	// 	offset: 200,
	// 	// Включение эвентов
	// 	listen: {
	// 		// Включить свайп влево
	// 		left: true,
	// 		// Включить свайп вправо
	// 		right: false,
	// 	},
	// 	// Евенты в конце сдвига
	// 	touchend: {
	// 		// Евент если сдвиг влево был больше this.offset
	// 		left: function() {
	// 			$('.mob-menu-close').trigger('click');
	// 		},
	// 		// Евент если сдвиг вправо был больше this.offset
	// 		right: function() {
	// 			$('.mob-menu-close').trigger('click');
	// 		},
	// 	},
	// 	// Классы
	// 	class: {
	// 		// Класс во время сдвига
	// 		touchmove: 'is-touchmove'
	// 	},
	// 	// Таймауты
	// 	timeout: {
	// 		transform: 300
	// 	}
	// });
});

