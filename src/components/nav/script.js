let $compress_nav_arr = $('.js-nav-compress');

$compress_nav_arr.each(function(i,el) {
	let $nav = $(el);
	let nav_change_width;
	let $list = $nav.find('> .nav-list');
	let $abroad = $nav.find('> .js-nav-abroad');
	let $abroad_list = $abroad.find('> .nav-list');


	let get_el_width = function($el) {
		return $el[0].getBoundingClientRect().width;
	};

	let get_el_right = function($el) {
		return $el[0].getBoundingClientRect().right;
	};

	let check_compress = function() {
		if ($abroad_list.children().length === 0) {
			$nav.addClass('is-no-compress')
		} else {
			$nav.removeClass('is-no-compress')
		}
	};

	let compress = function() {
		let $items = $list.find('> .nav-item');

		$nav.addClass('is-recalculation');
		$.each($($items.get().reverse()), function(i,el) {

			let $item = $(el);

			if (get_el_right($item) > (get_el_right($nav) - get_el_width($abroad)) ) {
				$item.prependTo( $abroad_list )
			}
		});
		check_compress();
		$nav.removeClass('is-recalculation');
	};
	let uncompress = function() {

		let $abroad_items = $abroad_list.find('> .nav-item');
		$nav.addClass('is-recalculation');
		$abroad_items.appendTo( $list );
		check_compress();

		compress();
		$nav.removeClass('is-recalculation');
	};

	let handler_resize = function() {
		if (nav_change_width !== get_el_width($nav)) {
			nav_change_width = get_el_width($nav);
			if ((get_el_width($list) + get_el_width($abroad)) > get_el_width($nav)  ) {
				compress()
			} else {
				uncompress()
			}
		} else {
			$nav.removeClass('is-recalculation');
		}
	};

	handler_resize();
	$(window).on('resize', handler_resize);
	$('[data-toggle="tab"]').on('shown.bs.tab', handler_resize);
	$nav.addClass('compress-initialized')
});

window.addEventListener( 'load', function( event ) {
	$(document).on('click touch', '.js-nav-toggle', function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log('menu load')
		let $toggle = $(this);
		let $link = $toggle.parent();
		let $nav = $link.siblings('.js-nav');

		if ($link.hasClass('active')) {
			$link.removeClass('active');
			$nav.removeClass('active');
			$toggle.removeClass('active');
		} else {
			$link.addClass('active');
			$nav.addClass('active');
			$toggle.addClass('active');
		}
	});
});

