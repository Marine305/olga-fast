window.addEventListener('load', function (event) {
	$('.js-notify').removeClass('hidden');
	let notify_show_timeout;
	let timeout = 5000;

	window.notify_show = function (time) {
		timeout = time;
		$('[data-target=".notify"]').trigger('click');

		notify_show_timeout = setTimeout(function () {
			$('[data-target=".notify"].active').trigger('click');
			clearTimeout(notify_show_timeout);
		}, timeout)
	};

	$(document).on('mouseover touchstart', '.js-notify', function () {
		clearTimeout(notify_show_timeout);
	});

	$(document).on('mouseleave touchend', '.js-notify', function () {
		notify_show_timeout = setTimeout(function () {
			$('[data-target=".notify"].active').trigger('click');
			clearTimeout(notify_show_timeout);
		}, timeout)
	});

	window.swipe({
		selector: '.js-notify',
		// Сдвиг при котором произойдет this.touchend
		offset: 200,
		// Включение эвентов
		listen: {
			// Включить свайп влево
			left: false,
			// Включить свайп вправо
			right: true,
		},
		// Евенты в конце сдвига
		touchend: {
			// Евент если сдвиг влево был больше this.offset
			left: function () {
				$('.notify-close').trigger('click');
			},
			// Евент если сдвиг вправо был больше this.offset
			right: function () {

				$('.notify-close').trigger('click');
			},
		},
		// Классы
		class: {
			// Класс во время сдвига
			touchmove: 'is-touchmove'
		},
		// Таймауты
		timeout: {
			transform: 300
		}
	});
});
