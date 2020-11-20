window.addEventListener( 'load', function() {
  const accordeonWrapper = $('.accordeon');
  if (accordeonWrapper.length) {
    let triggers = $('.js-accordeon-trigger');
    triggers.each(function() {
      let _ = $(this);
      let parent = _.closest('.accordeon__item');
      let head = _.find('.accordeon__head');
      head.on('click', () => {
        let target = parent.find('.accordeon__body');

        if (!_.hasClass('anim')) {
          _.addClass('anim');
          if (target.hasClass('active')) {
            parent.removeClass('active');
            target.removeClass('active').slideUp(200);
          } else {
            triggers.removeClass('active').find('.accordeon__body').removeClass('active').slideUp(200);
            parent.addClass('active');
            target.addClass('active').slideDown(200);
          }
          setTimeout(() => {
            _.removeClass('anim');
          }, 500);
        }
      });
    });
  }

});
