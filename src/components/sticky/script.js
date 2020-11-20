(function() {
	window.reinit.sticky = function() {
		var sticky;
		if (window.Sticky) {
			sticky = new Sticky('.js-sticky');
		}
	};

	window.reinit.sticky()
})();
