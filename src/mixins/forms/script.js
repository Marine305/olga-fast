window.addEventListener('load', function (event) {
	// console.log('form')

	// window.reinit.reinitDatepicker = function() {
	// 	$('.js-form-control--datepicker').datepicker({
	// 		minDate: new Date(),
	// 		clearButton: true,
	// 		changeMonth: true,
	// 		changeYear: true,
	// 		showOn: "button",
	// 		buttonImage: './images/i-calendar.svg',
	// 		buttonImageOnly: true,
	// 		buttonText: "Выбрать дату",
	// 		defaultDate: new Date(),
	// 		dateFormat: 'dd.mm.yyyy',
	// 		autoClose: true,
	// 		onSelect: function (a, b, c) {
	// 			let $el = c.$el;
	// 			let $form = $el.closest('.bv-form');
	// 			$form.data('bootstrapValidator').revalidateField($el);
	// 		}
	// 	});
	// }
	// window.reinit.reinitDatepicker()

	$(document).on('input', '.sidebar-filter__input', function() {
		let $this = $(this);
		let $wrap = $this.closest('.sidebar-filter__content');
		let $checkbox = $wrap.find('input[type="checkbox"]');
		let value = $this.val();
	});
});
