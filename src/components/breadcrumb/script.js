// window.addEventListener( 'load', function( event ) {
// 	const breadcrumb = $(".breadcrumb");

// 	if (breadcrumb.length > 0) {
// 		breadcrumb.each(function (i, el) {

// 			const li_available_width = 50;
// 			let cur_li_available_width;
// 			const breadcrumb = $(el);



// 			const list = breadcrumb.find('.breadcrumb__list');
// 			const list_width = list.width();
// 			const li_link = list.find('> li');
// 			const li_link_shrink = list.find('> li:not(:last-child):not(:first-child)');
// 			const li_first = list.find('> li:first-child');
// 			const li_first_width = li_first.width();
// 			const li_last = list.find('> li:last-child');
// 			const li_last_width = li_last.width();
// 			let li_width = 0;

// 			$.each(li_link, function (i, el) {
// 				const li = $(el);
// 				li_width += li.width();
// 				li.attr('data-width', li.width())
// 			});


// 			if ( li_width > list_width ) {
// 				cur_li_available_width = list_width - li_first_width - li_last_width;

// 				if (li_link_shrink.length > 0 && cur_li_available_width / li_link_shrink.length > li_available_width) {
// 					$.each(li_link_shrink, function(i,el) {
// 						$(el).attr('data-max-width', cur_li_available_width / li_link_shrink.length)
// 						$(el).css('max-width', cur_li_available_width / li_link_shrink.length)
// 					})
// 				} else if (li_link_shrink.length > 0) {
// 					$.each(li_link_shrink, function(i,el) {
// 						$(el).attr('data-max-width', li_available_width)
// 						$(el).css('max-width', li_available_width)
// 					})
// 				}

// 				li_link_shrink.on('mouseover', function() {
// 					$(this).css('max-width', parseFloat($(this).attr('data-width')));
// 				});
// 				li_link_shrink.on('mouseleave', function() {
// 					$(this).css('max-width', parseFloat($(this).attr('data-max-width')));
// 				});


// 				li_last.on('mouseover', function() {
// 					var list_right = list[0].getBoundingClientRect().right;
// 					var li_last_right = li_last[0].getBoundingClientRect().right;

// 					if ( list_right === li_last_right) {
// 						$.each(li_link_shrink, function(i,el) {
// 							$(this).addClass('breadcrumb__item--hide')
// 						})
// 					}



// 				});
// 				li_last.on('mouseleave', function() {
// 					$.each(li_link_shrink, function(i,el) {
// 						$(this).removeClass('breadcrumb__item--hide')
// 					})
// 				});
// 			}


// 			breadcrumb.removeClass('not-init');
// 		});

// 	}
// });
