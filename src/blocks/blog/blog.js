

$('.blog-block').masonry({
    itemSelector : '.blog-block__item',
  	fitWidth: true
});


/* ========== parallax ==========  */
(function() {
	if ($('.blog-block__item').length) {
		var tlAppearItem = new TimelineMax()
		.fromTo('.blog-block__img img', 4, { y:0}, { y:-250})

		var controller = new ScrollMagic.Controller();

		new ScrollMagic.Scene({
			triggerElement: ".blog-block__img img",
			duration: "300%",
			// triggerHook: 1
			triggerHook: 1,
		})

		.setTween(
			tlAppearItem
			)
			// .addIndicators({name:"paralax"})
			.addTo(controller);
		}
})();

/* ========== parallax END ==========  */