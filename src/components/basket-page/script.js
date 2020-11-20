window.addEventListener( 'load', function( event ) {

  $(document).on('click', '[data-deliveryCenter]', function() {
    var center = this.getAttribute('data-deliveryCenter').split(',');
    center[0] = parseFloat(center[0]);
    center[1] = parseFloat(center[1]);
    window.basket_delivery_map.setCenter(center);
    window.basket_delivery_map.setZoom(15);
	});
	
  window.reinit.fixOrderBox = function() {
    const target = $('.js-order-box');
    const targetParent = $('.js-order-box-parent');
    const targetBtn = $('.js-order-box-btn');
    let targetHeight = target.height();
    let targetParentHeight = targetParent.height();
    $(window).on('scroll', function () {
      if ($(window).width() < 1199) {
				if ( $(window).scrollTop() > 400 && $(window).scrollTop() < $('.basket-page').height() - $('footer').height()) {
          targetBtn.addClass('order-box-btn-fixed');
        } else {
          targetBtn.removeClass('order-box-btn-fixed');
        }
      }
    });
  }
  window.reinit.fixOrderBox()
});
