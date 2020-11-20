// import 'popper.js';
// import 'bootstrap';
// import 'bootstrap/js/src/util.js';
import 'bootstrap/js/src/modal.js'; //модалки
// import 'bootstrap/js/src/tab.js'; //табы
// import 'bootstrap/js/src/collapse.js'; //аккордеоны
// import 'bootstrap/js/src/tooltip.js'; //аккордеоны

// inits
import uiInits from './init';





const ready = (callback) => {
	document.readyState != "loading" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
	uiInits.init();

	$(document).on('input', '.ajaxfilter-num-to', function () {
		let input = {};
		input.$el = $(this);
		input.value = input.$el.val();
		input.data = {
			max_value: parseInt(input.$el.attr('placeholder'))
		};

		if (input.value > input.data.max_value) {
			input.$el.val(input.data.max_value);
		}
	});
	window.swipe({
		selector: '.sidebar-filter__block',
		// Сдвиг при котором произойдет this.touchend
		offset: 200,
		// Включение эвентов
		listen: {
			// Включить свайп влево
			left: true,
			// Включить свайп вправо
			right: false,
		},
		// Евенты в конце сдвига
		touchend: {
			// Евент если сдвиг влево был больше this.offset
			left: function () {
				$('.sidebar-filter__close').trigger('click');
			},
			// Евент если сдвиг вправо был больше this.offset
			right: function () {

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
	const btn_toggle = require('../../mixins/btn-toggle/btn-toggle');
	const lazy_img = require('../../mixins/lazy-img/script');
	const lazy_video = require('../../mixins/lazy-video/script');
	const scroll_to = require('../../mixins/scroll-to/script');
	const trigger_click = require('../../mixins/trigger-click/script');
	// const select = require('../../mixins/forms/select/script');
	// const datepicker = require('../../components/form-mixin/datapicker/script');
	// const form = require('../../mixins/forms/script');

});
