var sidebar = {
  init: function() {
    var sidebar = $('.sidebar')
    $('.sidebar-toggle').click(function() {
      $(this).toggleClass('open')
      sidebar.toggleClass('open')
    })
  }
}, home = {
  init: function() {
    $('.owl-carousel').owlCarousel({
      items: 1,
      dots: false,
      loop: true,
      lazyLoad: true,
      autoplay: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      onLoadedLazy: function(e) {
        e.element.parent('.item').addClass('loaded')
      }
    })
  }
}, owlSlide = {
  init: function() {
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      margin: 15,
      dots: false,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {items: 1},
        768: {items: 2},
        992: {items: 3}
      }
    })
  }
};

$(function() {
  sidebar.init(),
  $('body').hasClass('home') && home.init(),
  $('body').hasClass('creative-sub') && owlSlide.init()
})
