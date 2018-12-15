// $('.blog-block').masonry({
//   columnWidth: 445,
//   itemSelector: '.grid'
// });

$('.blog-block').masonry({
    // options
    itemSelector : '.blog-block__item',
    // columnWidth: 465,
  	fitWidth: true
    // console.log('masonry');
    // isAnimated: !Modernizr.csstransitions
});




// (function() {
//   var grid = $('.masonry-grid-item').imagesLoaded(function() {
//     $('.masonry-grid').masonry({
//       itemSelector: '.masonry-grid-item'
//     });
//   });
// })();