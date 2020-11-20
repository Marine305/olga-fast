window.addEventListener( 'load', function( event ) {
	window.vendorLoader({
		name: 'tab',
		path: 'js/vendor/tab.min.js',
		event: {
			scroll: true,
			click: true,
			mouseover: {
				trigger: '[data-toggle="tab"]'
			}
		}
	});
});
