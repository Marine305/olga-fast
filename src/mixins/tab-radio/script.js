(function() {

	$(document).on('click', '.js-tab-radio', function() {
		const $radio = $(this);
		const radio_data_target = $radio.attr('data-target');
		const $radio_target = $(radio_data_target);
		const $radio_name = $radio.attr('name');
		const $radio_list = $('[name='+$radio_name+']');

		$radio_list.each(function(i,el) {
			const $radio = $(el);
			const radio_data_target = $radio.attr('data-target');
			const $radio_target = $(radio_data_target);

			if ($radio_target.length > 0) {
				$radio_target.removeClass('active');
			}
		});

		if ($radio_target.length > 0) {
			$radio_target.addClass('active');
		}

	})
})();
