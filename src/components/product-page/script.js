window.addEventListener( 'load', function( event ) {

	window.reinit.fixCard = function() {
		const target = $('.js-fixed-card-body');
		const fixedCard = $('.fixed-card-body-wrap');
		const productPage = $('.product-page .container');
		let productPageHeight = productPage.height();
		
		$(window).on('scroll', function () {
			// console.log($(window).scrollTop());
			// console.log($(window).scrollTop() >= fixedCard.offset().top - 165);
			
			if ($(window).width() > 1199) {
				const bxPanel = $('.bx-edit-mode').find('#panel');
				if ( $(window).scrollTop() >= fixedCard.offset().top - 165 && $(window).scrollTop() < productPageHeight ) {
					target.addClass('card-fixed');
					if(bxPanel.length){
						let bxPanelHeight = bxPanel.height();
						target.css('top', function(){
							let bxTop = bxPanelHeight + 165 + 'px';
							return bxTop;
						})
					}
				} else {
					target.removeClass('card-fixed');
					if(bxPanel.length){
						target.css('top', '0')
					}
				}

				if ($(window).scrollTop() < productPageHeight) {
					target.css('opacity', '1');
				} else {
					target.css('opacity', '0');
				}
			}
		});
	
	}
	window.reinit.fixCard()
	window.reinit.closeSubTitle = function() {
		const prodSubTitle = $('.product-card-sub-title')
		const closeIcon = $('.product-card-sub-title .icon')
		closeIcon.on('click', function() {
			prodSubTitle.css('display', 'none')
		})
	}
	window.reinit.closeSubTitle()
});