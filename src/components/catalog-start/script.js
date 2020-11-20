window.addEventListener( 'load', function( event ) {
	window.reinit.catalogTrigger = function() {
		let catalogList = $('.js-catalog-list')
		if (catalogList.length) {
			catalogList.each(function() {
				let _this = $(this);
				let catalogItemCount = _this.children('.catalog-menu__item').length
				if (catalogItemCount > 6) {
					// console.log(catalogItemCount)
					_this.append('<div class="catalog-menu__link js-link-trigger"><span class="link-show">Показать ещё</span><span class="link-hide">Свернуть</span></div>')
				}
				
			})
		}
		const showMenu = $('.js-link-trigger')
		showMenu.each(function() {
			let _this = $(this);
			_this.click(function() {
				let list = _this.parent('.js-catalog-list')
				_this.toggleClass('active')
				list.toggleClass('opened')
			})
		})
	};

window.reinit.catalogTrigger()
});
