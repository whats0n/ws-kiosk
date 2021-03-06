import 'owl.carousel';

let initialized = false;
const slider = $('.js-grid-slider');
const OWL = 'owl-carousel';
const prev = '<svg viewBox="0 0 80.5 137.1"><path d="M26.8 68.5l51.6-51.6c2.7-2.7 2.7-7.2 0-9.9l-5-5c-2.7-2.7-7.2-2.7-9.9 0L2.1 63.6c-2.7 2.7-2.7 7.2 0 9.9L63.6 135c2.7 2.7 7.2 2.7 9.9 0l5-5c2.7-2.7 2.7-7.2 0-9.9L26.8 68.5z"/></svg>';
const next = '<svg viewBox="0 0 80.5 137.1"><path d="M2.1 120.1c-2.7 2.7-2.7 7.2 0 9.9l5 5c2.7 2.7 7.2 2.7 9.9 0l61.5-61.5c2.7-2.7 2.7-7.2 0-9.9L17.1 2C14.4-.7 9.9-.7 7.2 2l-5 5c-2.7 2.7-2.7 7.2 0 9.9l51.6 51.6-51.7 51.6z"/></svg>';


const options = {
  items: 1,
  loop: true,
  dots: false,
  nav: true,
  navContainerClass: 'grid-table__nav',
  navClass: ['grid-table__prev', 'grid-table__next'],
  navText: [prev, next]
};

$(window).on('load resize', () => {

  const mediaWidth = window.matchMedia('(max-width: 1080px)').matches;
  
  if (mediaWidth && !initialized) {
    initialized = true;
    slider
    	.addClass(OWL)
    	.owlCarousel(options);
  } else if (!mediaWidth && initialized) {
    initialized = false;
    slider
    	.removeClass(OWL)
    	.trigger('destroy.owl.carousel');
  }

});

const menuOpen = $('.js-menu-open');
const menuClose = $('.js-menu-close');
const menu = $('.js-menu');
const IS_OPEN = 'is-open';
const IS_ACTIVE = 'is-active';

menuOpen.click(e => {
  e.preventDefault();
  menu.addClass(IS_OPEN);
  menuOpen.addClass(IS_ACTIVE);
});

menuClose.click(e => {
  e.preventDefault();
  menu.removeClass(IS_OPEN);
  menuOpen.removeClass(IS_ACTIVE);
});


//

const modals = $('.js-modal[data-modal]');

$('.js-modal-open').each((i, control) => {
  control = $(control);
  const modal = modals.filter(`[data-modal="${control.data('modal-target')}"]`);

  control.on('click', e => {
    e.preventDefault();
    modal.addClass(IS_OPEN);
  });
});

$('.js-modal-close').each((i, closeButton) => {
  closeButton = $(closeButton);
  const modal = closeButton.closest('.js-modal');

  closeButton.on('click', e => {
    e.preventDefault();
    modal.removeClass(IS_OPEN);
  });
});
